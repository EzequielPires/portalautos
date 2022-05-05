import { Address } from "./Address";
import { maskPhone } from "../hooks/useMask";

export class User {
    name: any;
    email: any;
    cell_phone: any;
    cpf: any;
    description: any;
    bird_at: any;
    email_status: any;
    social_network_id: any;
    status: any;
    type_login: any;
    id: any;
    
    address: Address;
    password: any;

    toFormDataFromUseFormCar() {
        const data = new FormData();
        data.append('user[name]', this.name.value);
        data.append('user[email]', this.email.value);
        data.append('user[cell_phone]', this.cell_phone.value);
        data.append('user[cpf]', this.cpf.value);
        return data;
    }
    fromObject(data: any): User {
        data.name && this.name.setValue(data.name);
        data.email && this.email.setValue(data.email);
        data.cell_phone && this.cell_phone.setValue(maskPhone(data.cell_phone));
        data.cpf && this.cpf.setValue(data.cpf);
        data.description && this.description.setValue(data.description);
        data.bird_at && this.bird_at.setValue(data.bird_at);
        data.address?.zipcode && this.address.zipcode.setValue(data.address.zipcode);
        data.address?.city && this.address.city.setValue(data.address.city);
        data.address?.state && this.address.state.setValue(data.address.state);
        return this;
    }
    fromObjectClean() {
        this.name.setValue('');
        this.email.setValue('');
        this.cell_phone.setValue(maskPhone(''));
        this.cpf.setValue('');
        this.description.setValue('');
        this.bird_at.setValue('');
        this.address.zipcode.setValue('');
        this.address.city.setValue('');
        this.address.state.setValue('');
    }
}