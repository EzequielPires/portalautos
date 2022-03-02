import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

type Input = {
    onChange: any;
    value: any;
    onBlur: any;
    placeholder?: any;
    error: any;
    readOnly?: boolean;
    required?: boolean;
}

export function InputEmail({
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
            <label htmlFor="email">Email*</label>
            <FontAwesomeIcon icon={faEnvelope} />
            <input
                type="email"
                id="email"
                onChange={onChange}
                placeholder={placeholder ?? 'Digite seu email'}
                onBlur={onBlur}
                value={value ?? ''}
                readOnly={readOnly ?? false}
            />
            {error && !required && <span className={styles.input_error}>{error}</span>}
        </div>
    )
}