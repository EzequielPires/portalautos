import { api } from "../services/api";

export class UserRepository {
    async findOne() {
        try {
            const user = await api.get('/user/view').then(res => res.data.data.user);
            console.log(user);
            return user;
        } catch {
            return false;
        }
    }
}