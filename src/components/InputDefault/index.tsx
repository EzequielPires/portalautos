import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

type Input = {
    id?: string;
    label: string;
    onChange: any;
    value: any;
    onBlur: any;
    placeholder?: any;
    type: string;
    error: any;
    readOnly?: boolean;
    ico?: any;
}

export function InputDefault({
    id,
    onChange,
    value,
    onBlur,
    label,
    placeholder,
    type,
    readOnly,
}: Input) {
    return (
        <div className={styles.input_box}>
            <label htmlFor="email">{label}</label>
            <input
                type={type}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                onBlur={onBlur}
                value={value ?? ''}
                readOnly={readOnly ?? false}
            />
        </div>
    )
}