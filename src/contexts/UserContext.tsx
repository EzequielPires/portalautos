import router from "next/router";
import { createContext, useState } from "react"
import useForm from "../hooks/useForm";
import { maskCep, maskCpf, maskPhone, validateCpf } from "../hooks/useMask";
import { apiUser } from "../services/api";

type UserContextType = {
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
        name.setValue('');
        telefone.setValue('');
        email.setValue('');
        cpf.setValue('');
        password.setValue('');
        password_repeat.setValue('');
        old_password.setValue('');
        code_verification.setValue('');
        cep.setValue('');
        city.setValue('');
        state.setValue('');
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
        cep.setValue(maskCep(str));
        if (str.replace(/[^0-9]/g, '').length >= 8) {
            const response = await apiUser.get(`/address/cep/${str.replace(/[^0-9]/g, '')}`)
                .then((res): any => res.data)
                .catch(error => console.error(error));
            addressCheck(response.data);
        } else {
            cep.setError(null);
            city.setValue('');
            state.setValue('');
        }
    }

    function addressCheck(address) {
        address.cep ? cep.setValue(maskCep(address.cep)) : null;
        address.cep === 'Not Found' ? cep.setError('Cep não encontrado') : null;
        address.city ? city.setValue(address.city) : null;
        address.state ? state.setValue(address.state) : null;
    }

    async function buildUser() {
        const response = await apiUser.get('/view')
            .then((response): any => {
                return response.data;
            })
            .catch(() => router.push('/error'));
        if (response.success === true) {
            let user = response.data.user;
            name.setValue(user.name ?? '');
            email.setValue(user.email ?? '');
            user.cell_phone ? telefone.setValue(maskPhone(user.cell_phone)) : null;
            user.cpf ? cpfCheck(user.cpf) : null;
            user.cpf && validateCpf(user.cpf.replace(/[^0-9]/g, '')) ? setReadCpf(true) : setReadCpf(false);
            user.address ? addressCheck(user.address) : null;
        }
    }

    async function editUser() {
        const data = new FormData();
        data.append('user[name]', name.value);
        data.append('user[email]', email.value);
        data.append('user[cpf]', cpf.value);
        data.append('user[cell_phone]', telefone.value);

        const address = new FormData();
        address.append('zipcode', cep.value);

        let resUser = await apiUser.post('/edit', data)
            .then(function (response: any) {
                return response.data;
            })
            .catch(() => router.push('/error'));
        let resAddress = await apiUser.post('/address/edit', address)
            .then(function (response: any) {
                return response.data;
            })
            .catch(() => router.push('/error'));

        if (resUser.success && resAddress.success) {
            return true;
        } else {
             
            if(!resUser.success) {
                let error = resUser.data.error;
                error.cell_phone ? telefone.setError(error.cell_phone) : null;
                error.cpf ? cpf.setError(error.cpf) : null;
            }
        }
    }

    async function createUser() {
        const data = new FormData();
        data.append('user[name]', name.value);
        data.append('user[cell_phone]', telefone.value);
        data.append('user[email]', email.value);
        data.append('user[password][first]', password.value);
        data.append('user[password][second]', password_repeat.value);

        const response = await apiUser.post('/new', data)
            .then(function (response: any) {
                return response.data;
            })
            .catch(() => router.push('/error'));

        if (response.success === true) {
            return true;
        } else {
            if (response.data.error) {
                response.data.error.cell_phone ? telefone.setError('Phone is already in use!') : null;
                response.data.error.email ? email.setError('Email is already in use!') : null;
                response.data.error.first ? password.setError('Different passwords.') : null;
                return response.data;
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