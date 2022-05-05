import router from "next/router";
import { createContext, useState } from "react"
import { User } from "../entities/User";
import { UserFactory } from "../factory/UserFactory";
import useForm from "../hooks/useForm";
import { maskCep, maskCpf, maskPhone, validateCpf } from "../hooks/useMask";
import { UserRepository } from "../repositories/UserRepository";
import { api, apiUser } from "../services/api";
import { UserService } from "../services/UserService";

type UserContextType = {
    user: User;
    name: any;
    cpf: any;
    email: any;
    password: any;
    password_repeat: any;
    old_password: any;
    telefone: any;
    cep: any;
    city: any;
    state: any;
    code_verification: any;
    email_status: any;
    readCpf: any;
    buildUser: () => Promise<void>;
    destroyUser: () => void;
    getZipcode: (str) => Promise<void>;
    editUser: () => Promise<void | boolean>;
    createUser: () => Promise<void | boolean>;
    cls: () => void;
}

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }) {
    let user = UserFactory.createForUseFormUser(); 
    const userService = new UserService();
    const name = useForm('name');
    const cpf = useForm('cpf');
    const email = useForm('email');
    const password = useForm('password');
    const password_repeat = useForm('password');
    const old_password = useForm('password');
    const telefone = useForm('tel');
    const cep = useForm('cep');
    const city = useForm('city');
    const state = useForm('state');
    const email_status = useState(null)
    const code_verification = useForm('code_verification');
    const [readCpf, setReadCpf] = useState(false);

    function cls() {
        user.fromObjectClean();
    }

    function cpfCheck(str) {
        cpf.setValue(maskCpf(str));
        if (str.length === 11) {
            validateCpf(str.replace(/[^0-9]/g, '')) ? cpf.setError(null) : cpf.setError('CPF inválido');
        } else {
            cpf.error ? cpf.setError(null) : null;
        }
    }

    async function getZipcode(str) {
        user.address.zipcode.setValue(maskCep(str));
        if (str.replace(/[^0-9]/g, '').length >= 8) {
            const response = await api.get(`/address/cep/${str.replace(/[^0-9]/g, '')}`)
                .then((res): any => res.data)
                .catch(error => console.error(error));
            addressCheck(response.data);
        } else {
            user.address.zipcode.setError(null);
            user.address.city.setValue('');
            user.address.state.setValue('');
        }
    }

    function addressCheck(address) {
        address.cep ? cep.setValue(maskCep(address.cep)) : null;
        address.cep === 'Not Found' ? cep.setError('Cep não encontrado') : null;
        address.city ? user.address.city.setValue(address.city) : null;
        address.state ? user.address.state.setValue(address.state) : null;
    }

    async function buildUser() {
        const userRepository = new UserRepository();
        const data = await userRepository.findOne();
        user = user.fromObject(data);
    }

    async function editUser() {
        let resUser = await userService.update(user.toFormDataFromUseFormCar());
        let resAddress = await userService.changeAddress(user.address.zipcode.value);
        if (resUser.success && resAddress.success) {
            return true;
        } 
        /* else {
             
            if(!resUser.success) {
                let error = resUser.data.error;
                error.cell_phone ? telefone.setError(error.cell_phone) : null;
                error.cpf ? cpf.setError(error.cpf) : null;
            }
        } */
    }

    const createUser = async () => {
        const userSevice = new UserService();
        const user = await userSevice.create({
            name: name.value,
            cell_phone: telefone.value,
            email: email.value,
            password: password.value,
            password_repeat: password_repeat.value,
        });
        if (user.success === true) {
            return true;
        } else {
            if (user.data.error) {
                user.data.error.cell_phone ? telefone.setError('Phone is already in use!') : null;
                user.data.error.email ? email.setError('Email is already in use!') : null;
                user.data.error.first ? password.setError('Different passwords.') : null;
                return user.data;
            } else {
                return false;
            }
        }
    }

    function destroyUser() {
        name.setValue('');
        cpf.setValue('');
        email.setValue('');
        password.setValue('');
        password_repeat.setValue('');
        old_password.setValue('');
        telefone.setValue('');
        cep.setValue('');
        city.setValue('');
        state.setValue('');
        code_verification.setValue('');
    }

    return (
        <UserContext.Provider value={{
            user,
            name,
            cpf,
            email,
            password,
            password_repeat,
            old_password,
            telefone,
            cep,
            city,
            state,
            code_verification,
            email_status,
            readCpf,
            buildUser,
            destroyUser,
            getZipcode,
            editUser,
            createUser,
            cls,
        }}>
            {children}
        </UserContext.Provider>
    );
}