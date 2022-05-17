import {createContext, useEffect, useState} from "react";
import {FilterAnnouncementsHelper} from "../helpers/FilterAnnouncementsHelper";
import router, {useRouter} from "next/router";
import {api} from "../services/api";

export type QueryFilterType = {
    type?: string | string[];
    brand?: string | string[];
    model?: string | string[];
    state?: string | string[];
    identifier?: string;
    size?: number;
    limit?: number;
}

type FilterType = {
    filter: FilterAnnouncementsHelper;
    vehicles: Array<any>
    run: (query: QueryFilterType) => void;
    more: (query: QueryFilterType) => void;
    handleQuery: (query: QueryFilterType) => void;
    searchVehicles: (id: string) => Promise<void>;
    activeVehicle: (id: string) => Promise<void>;
    soldVehicle: (id: string) => Promise<void>;
}

export const FilterDashboardContext = createContext({} as FilterType);

export function FilterDashboardProvider({children}) {
    const router = useRouter();
    let filter = new FilterAnnouncementsHelper();
    const [vehicles, setVehicles] = useState<Array<any>>([]);

    const run = async ({type, brand, model, state, identifier, limit}: QueryFilterType) => {
        const res = await filter.run({type, brand, model, state, identifier, limit});
        brand ? filter.brand.setValue(brand) : filter.brand.setValue('0');
        model ? filter.model.setValue(model) : filter.model.setValue('0');
        setVehicles(res);
    }
    const more = async ({type, brand, model, state, identifier}: QueryFilterType) => {
        const res = await filter.run({type, brand, model, state, identifier, size: vehicles.length});
        setVehicles([...vehicles, ...res]);
    }

    const searchVehicles = async (params) => {
        const res = await api.get(`/vehicle/list?${params}`)
            .then((res: any) => {
                return res.data;
            })
            .catch(() => router.push('/error'));
        if (res.success) {
            setVehicles(res.data.vehicles);
        }
    }

    const activeVehicle = async (id) => {
        const res = await api.put(`/vehicle/${id}/active`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
        res.success === true ? await run({...router.query, limit: vehicles.length}) : null;
    }

    const soldVehicle = async (id) => {
        const res = await api.put(`/vehicle/${id}/sold`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
        res.success === true ? await run({...router.query, limit: vehicles.length}) : null;
    }

    const handleQuery = ({state, type, brand, model, identifier}: QueryFilterType) => {
        router.replace({
            pathname: '/meus-anuncios',
            query: {
                state: state ?? 'active',
                type: type ?? 'car',
                brand: brand != '0' ? brand : null,
                model: model != '0' ? model : null
            }
        }).then();
    }
    return (
        <FilterDashboardContext.Provider value={{
            vehicles,
            filter,
            run,
            more,
            handleQuery,
            searchVehicles,
            activeVehicle,
            soldVehicle
        }}>
            {children}
        </FilterDashboardContext.Provider>
    );
}