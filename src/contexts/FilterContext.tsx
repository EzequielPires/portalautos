import { createContext, useCallback, useState } from "react";
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
}

export const FilterContext = createContext({} as Filter);

export function FilterProvider({ children }) {
    const [activeFilter, setActiveFilter] = useState(false);
    const [active, setActive] = useState(false);

    const [brand, setBrand] = useState(null);
    const model = useSelect();
    const version = useSelect();

    

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
        }}>
            {children}
        </FilterContext.Provider>
    )
}