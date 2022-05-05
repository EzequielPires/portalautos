import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import { useEffect, useRef } from "react";

type Input = {
    id?: string
    label: string;
    onChange: any;
    value: any;
    onBlur: any;
    placeholder?: any;
    type: string;
    error: any;
    readOnly?: boolean;
    ico?: any;
    required?: boolean;
}

export function InputIco({
    id,
    onChange,
    value,
    onBlur,
    label,
    placeholder,
    type,
    error,
    readOnly,
    ico,
    required
}: Input) {
    return (
        <div className={styles.input_box}>
            <label htmlFor={id}>{label}</label>
            <FontAwesomeIcon icon={ico as IconProp} />
            <input
                type={type}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                onBlur={onBlur}
                value={value ?? ''}
                readOnly={readOnly ?? false}
            />
            {error && !required && <span className={styles.input_error}>{error}</span>}
        </div>
    )
}