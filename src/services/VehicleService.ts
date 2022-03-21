import router from "next/router";
import { api } from "./api";

export class VehicleService {
    async create(data, type) {
        const vehicle = await api.post(`/vehicle/${type}/new`, data)
            .then((res: any) => res.data)
            .catch(function () {
                router.push('/error');
            }
            );

        return vehicle;
    }
    async update(data, type, id) {
        const vehicle = await api.post(`vehicle/${type}/${id}/edit`, data)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));

        return vehicle;
    }
}