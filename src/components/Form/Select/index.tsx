import { useEffect } from 'react';
import styles from './styles.module.scss';

type SelectType = {
    id: string;
    label: string;
    options: Array<any>;
    defaultOption: string;
    defaultValue?: string;
    error?: string | any,
    refSelect?: any;
    onChange?: (string) => void;
    onBlur?: (string) => void;
    required?: boolean;
}

export function Select({ id, label, required, onChange, options, defaultOption, defaultValue, refSelect, error, onBlur }: SelectType) {
    useEffect(() => {
        defaultValue && defaultValue != '0' ? onChange(defaultValue) : null;
    }, [defaultValue]);
    //console.log(options);
    return (
        <div className={styles.select_box}>
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                name={id}
                ref={refSelect}
                value={defaultValue}
                onChange={onChange ? (e) => onChange(e.target.value) : null}
                onBlur={onBlur ? (e) => onBlur(e.target.value) : null}
                required
            >
                <option value="0">{defaultOption}</option>
                <option disabled></option>
                {options && options.length > 0 ? options.map(item => (
                    <option key={item.id ?? item} value={item.id ?? item}>
                        {item.name ? item.name.toUpperCase() : item}
                    </option>
                )) : null}
            </select>
            {error && required ? <span className={styles.select_error}>{error}</span> : null}
        </div>
    );
}