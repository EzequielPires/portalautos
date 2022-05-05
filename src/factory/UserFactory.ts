import { Address } from "../entities/Address";
import { User } from "../entities/User";
import useForm from "../hooks/useForm";
import { AddressFactory } from "./AddressFactory";

export class UserFactory {
    public static createForUseFormUser(): User {
        const user = new User();
        const address = AddressFactory.createForUseFormAddress();
        user.address = address;
        user.bird_at = useForm('bird_at');
        user.cell_phone = useForm('tel');
        user.cpf = useForm('cpf');
        user.description = useForm('name');
        user.email = useForm('email');
        user.name = useForm('name');
        user.password = useForm('password');

        return user;
    }
}