import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { FilterFactory } from "../factory/FilterFactory";
import { FilterHelper } from "../helpers/FilterHelper";
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
    more: any;
}

export const FilterContext = createContext({} as Filter);

export function FilterProvider({ children }) {
    const [activeFilter, setActiveFilter] = useState(false);
    const [active, setActive] = useState(false);
    let filter = FilterFactory.initialize();
    const [brand, setBrand] = useState(null);
    const model = useSelect();
    const version = useSelect();
    
    const run = async (id, link) => {
        const res = await filter.run(id, link);
        let filterDecode = link ? filter.decode(link) : null;
        filter.brands.setOptions(res.brands);
        filter.models.setOptions(res.models);
        filter.versions.setOptions(res.versions);
        filter.categories.setOptions(res.categories);
        filter.characteristics.setOptions(res.characteristics);
        filter.fuels.setOptions(res.fuels);
        filter.colors.setOptions(res.colors);
        filter.gearshifts.setOptions(res.gearshifts);
        filter.optional.setOptions(res.items.optional);
        filter.type.setValue(res.type);

        filter.vehicles.onChange(res.result.vehicles);
        if(filterDecode) {
            filter.optional.setValue(filterDecode.optional);
            filter.categories.setValue(filterDecode.category);
            filter.characteristics.setValue(filterDecode.characteristics);
            filter.colors.setValue(filterDecode.color);
            filter.price_min.setValue(filterDecode.price_min);
            filter.price_max.setValue(filterDecode.price_max);
            filter.mileage_traveled_min.setValue(filterDecode.mileage_traveled_min);
            filter.mileage_traveled_max.setValue(filterDecode.mileage_traveled_max);
            filter.state.setValue(filterDecode.state);
        }
        filter.brands.setValue(filter.verifyItemIdString(id[1], res.brands));
        filter.models.setValue(filter.verifyItemIdString(id[2], res.models));
        filter.versions.setValue(filter.verifyItemIdString(id[3], res.versions));
        filter.total.setValue(res.result.total);
    }
    const more = async (id, link, page) => {
        const res = await filter.more(id, link, page);
        let array = [...filter.vehicles.value, ...res.result.vehicles];
        filter.vehicles.onChange(array);
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
            more,
            filter
        }}>
            {children}
        </FilterContext.Provider>
    )
}