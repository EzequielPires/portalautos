import { api } from "../services/api";

export class StoreRepository {
    async view() {
        const store = await api.get('/store/view').then(res => res.data);
        return store;
    }
    async findTypesStore() {
        const listTypes = await api.get('/store-type/list').then(res => res.data);
        return listTypes;
    }
    async findAll() {

    }
}