import { useRouter } from "next/router";
import { createContext, useCallback, useEffect, useState } from "react";
import { FilterFactory } from "../factory/FilterFactory";
import { FilterHelper } from "../helpers/FilterHelper";
import { getListVehicle } from "../helpers/getListVehicle";
import { useSelect } from "../hooks/useSelect";

type Filter = {
    active: boolean;
    setActive: any;
    activeFilter: boolean;
    setActiveFilter: any;
    brand: any,
    setBrand: any,
    model: any,
    version: any,
    run: any,
    filter: FilterHelper,
}

export const FilterContext = createContext({} as Filter);

export function FilterProvider({ children }) {
    const [activeFilter, setActiveFilter] = useState(false);
    const [active, setActive] = useState(false);
    let filter = FilterFactory.initialize();
    const [brand, setBrand] = useState(null);
    const model = useSelect();
    const version = useSelect();
    const router = useRouter();
    
    const run = async (id) => {
        //console.log(id);
        const res = await filter.run(id);
        //console.log(res);
        filter.brands.setOptions(res[0].brands);
        filter.models.setOptions(res[0].models);
        filter.versions.setOptions(res[0].versions);
        filter.categories.setOptions(res[0].categories);
        filter.characteristics.setOptions(res[0].characteristics);
        filter.fuels.setOptions(res[0].fuels);
        filter.colors.setOptions(res[0].colors);
        filter.gearshifts.setOptions(res[0].gearshifts);
        filter.optional.setOptions(res[0].items.optional);
        filter.vehicles.onChange(res.result.vehicles);
        filter.brands.setValue(filter.verifyItemIdString(id[1], res[0].brands));
        filter.models.setValue(filter.verifyItemIdString(id[2], res[0].models));
        filter.versions.setValue(filter.verifyItemIdString(id[3], res[0].versions));
        filter.total.setValue(res.result.total);
    }
    const buildRouter = () => {

    }

    return (
        <FilterContext.Provider value={{
            active,
            setActive,
            activeFilter,
            setActiveFilter,
            brand,
            setBrand,
            model,
            version,
            run,
            filter
        }}>
            {children}
        </FilterContext.Provider>
    )
}