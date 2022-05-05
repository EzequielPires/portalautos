import {useState} from "react";

export function useCheckbox() {
    const [value, setValue] = useState(false);

    const onChange = () => {
        setValue(!value);
    }

    return {
        value,
        setValue,
        onChange
    }
}