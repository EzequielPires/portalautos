import { useState } from "react";

export function useMultiCheckbox() {
    const [value, setValue] = useState([]);
    const [options, setOptions] = useState([]);
    const onChange = (value) => {
        setValue(value);
    }

    return {
        value,
        onChange,
        options,
        setOptions,
    }
}