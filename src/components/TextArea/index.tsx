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
    required
}

export function TextArea({
    id,
    label,
    onChange,
    value,
    onBlur,
    placeholder,
    error,
    readOnly,
    required
}: Input) {
    return (
        <div className={styles.input_box}>
            <label htmlFor="email">{label}</label>
            <textarea
                id={id}
                name={id}
                onChange={onChange}
                placeholder={placeholder}
                onBlur={onBlur}
                value={value ?? ''}
                readOnly={readOnly ?? false}
            ></textarea>
        </div>
    )
}