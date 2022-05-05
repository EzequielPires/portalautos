import styles from "./styles.module.scss";

type Input = {
    id: any;
    label: any;
    onChange: any;
    value: any;
    onBlur: any;
    placeholder: any;
    error: any;
    readOnly?: boolean;
    required?: boolean;
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
            <label>{label}<strong>*</strong></label>
            <textarea
                id={id}
                name={id}
                onChange={onChange}
                placeholder={placeholder}
                onBlur={onBlur}
                value={value ?? ''}
                readOnly={readOnly ?? false}
            ></textarea>
            {error && !required ? <span className={styles.input_error}>{error}</span> : null}
        </div>
    );
}