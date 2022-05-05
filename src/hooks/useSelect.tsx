import { useRef, useState } from "react";

export function useSelect() {
    const [value, setValue] = useState('0');
    const select = useRef(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState([]);

    const validate = (value) => {
        if (!value || value === '0') {
            setError('Selecione um valor válido');
            return false;
        } else {
            setError(null);
            return true;
        }
    }
    const onChange = (value) => {
        setValue(value);
        validate(value);
    }

    return {
        select,
        error,
        value,
        options,
        setOptions,
        setValue,
        setError,
        onBlur: () => validate(select.current?.value),
        validate: (value) => validate(value),
        onChange,
    }
}