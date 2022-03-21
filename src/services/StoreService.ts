import { api } from "./api";

export class StoreService {
    async create(name, type) {
        try {
            const data = new FormData();
            data.append("store[name]", name);
            data.append("store[type]", type);
            const store = await api.post('/store/create', data).then(res => res.data);
            return store;
        } catch {
            return false;
        }
    }
    async update() {

    }
    async delete() {
        
    }
}