import { Address } from "../entities/Address"
import useForm from "../hooks/useForm";

export class AddressFactory {
    public static createForUseFormAddress(): Address{
        const address = new Address();
        address.city = useForm('');
        address.state = useForm('');
        address.district = useForm('');
        address.nation = useForm('');
        address.street = useForm('');
        address.zipcode = useForm('cep');

        return address;
    }
}