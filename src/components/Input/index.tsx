import styles from "./styles.module.scss";

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
    required?: boolean;
}

export function Input({
    id,
    onChange,
    value,
    onBlur,
    label,
    placeholder,
    type,
    error,
    readOnly,
    required
}: Input) {
    return (
        <div className={styles.input_box}>
            <label htmlFor={id}>{label}</label>
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