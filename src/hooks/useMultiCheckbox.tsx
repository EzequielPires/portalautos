import { useState } from "react";

export function useMultiCheckbox() {
    const [value, setValue] = useState([]);
    const [options, setOptions] = useState([]);

    const onChange = (value) => {
        setValue(value);
    }
    const add = (item) => {
        setValue([...value, item]);
    }
    const remove = (v) => {
        let filteredArray = value.filter(item => item!== v);
        setValue(filteredArray);
    }

    return {
        value,
        setValue,
        onChange,
        options,
        setOptions,
        add, 
        remove
    }
}