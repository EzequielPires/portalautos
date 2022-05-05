import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

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

export function InputZipcode({
    id,
    onChange,
    value,
    onBlur,
    label,
    placeholder,
    type,
    error,
    readOnly,
    ico
}: Input) {

    const {
        getZipcode,
    } = useContext(UserContext);
    return (
        <div className={styles.input_box}>
            <label htmlFor="email">{label}</label>
            <input
                type={type}
                id={id}
                onChange={e => getZipcode(e.target.value)}
                placeholder={placeholder}
                onBlur={onBlur}
                value={value ?? ''}
                readOnly={readOnly ?? false}
            />
        </div>
    )
}