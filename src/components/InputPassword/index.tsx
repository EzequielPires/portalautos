import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { useRef } from "react";

type Input = {
    label?: string;
    onChange: any;
    value: any;
    onBlur: any;
    placeholder?: any;
    error: any;
    readOnly?: boolean;
    required?: boolean;
}

export function InputPassword({
    label,
    onChange,
    value,
    onBlur,
    placeholder,
    error,
    readOnly,
    required
}: Input) {
    const refInput = useRef(null);

    function checkPassword(e) {
        e.preventDefault();
    }
    return (
        <div className={styles.input_box}>
            <label htmlFor="password">{label ?? 'Password*'}</label>
            <FontAwesomeIcon icon={faLock} />
            <FontAwesomeIcon icon={faEye}
                onClick={checkPassword}
                onMouseDown={(e) => {
                    e.preventDefault();
                    refInput.current.setAttribute('type', 'text');
                }}
                onMouseUp={(e) => {
                    e.preventDefault();
                    refInput.current.setAttribute('type', 'password');
                }}
                onMouseMove={(e) => {
                    e.preventDefault();
                    refInput.current.setAttribute('type', 'password');
                }} />
            <input
                type="password"
                id="password"
                ref={refInput}
                onChange={onChange}
                placeholder={placeholder ?? 'Digite sua senha'}
                onBlur={onBlur}
                value={value ?? ''}
                readOnly={readOnly ?? false}
            />
            {error && !required && <span className={styles.input_error}>{error}</span>}
        </div>
    )
}