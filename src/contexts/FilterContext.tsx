import {createContext, useState} from "react";
import {useSelect} from "../hooks/useSelect";

type Filter = {
    active: boolean;
    setActive: any;
    activeFilter: boolean;
    setActiveFilter: any;
    brand: any,
    setBrand: any,
    model: any,
    setModel: any,
    version: any,
    setVersion: any,
}

export const FilterContext = createContext({} as Filter);

export function FilterProvider({children}) {
    const [activeFilter, setActiveFilter] = useState(false);
    const [active, setActive] = useState(false);

    const [brand, setBrand] = useState(null);
    const [model, setModel] = useState(null);
    const [version, setVersion] = useState(null);

    return (
        <FilterContext.Provider value={{
            active,
            setActive,
            activeFilter,
            setActiveFilter,
            brand,
            setBrand,
            model,
            setModel,
            version,
            setVersion
        }}>
            {children}
        </FilterContext.Provider>
    )
}