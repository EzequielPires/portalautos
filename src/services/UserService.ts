import router from "next/router";
import { User } from "../Models/User";
import { api } from "./api";

export class UserService {
    async create({name, cell_phone, email, password, password_repeat}: User) {
        try {
            const data = new FormData();
            data.append('user[name]', name);
            data.append('user[cell_phone]', cell_phone);
            data.append('user[email]', email);
            data.append('user[password][first]', password);
            data.append('user[password][second]', password_repeat);
    
            const user = api.post('/user/new', data).then(res => res.data);
            return user;
        } catch {
            return false;
        }
    }
    async update(data: any) {
        const user = await api.post('/user/edit', data).then( (res:any) => res.data).catch(() => router.push('/error'));
        return user;
    }
    async changeAddress(zipcode) {
        const address = new FormData();
        address.append('zipcode', zipcode);
        const res = await api.post('/address/user', address).then((response: any) => response.data).catch(() => router.push('/error'))
        return res;
    }
    async changePassword() {

    }
    async checkUserLogged() {

    }
}