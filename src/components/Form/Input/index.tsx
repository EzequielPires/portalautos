import styles from './styles.module.scss';
import Eye from "../../../assets/ico/eye.svg";

type Input = {
    id: any;
    label: any;
    onChange: any;
    value: any;
    type: any;
    onBlur: any;
    placeholder: any;
    error: any;
    readOnly?: boolean;
    required?: boolean;
}

export function Input({
    id,
    label,
    onChange,
    value,
    type,
    onBlur,
    placeholder,
    error,
    readOnly,
    required
}: Input) {

    function checkPassword(e) {
        e.preventDefault();
       
        
    }

    return (
        <div className={styles.input_box}>
            <label>{label}<strong>{!required ? '*' : ''}</strong></label>
            <input
                id={id}
                name={id}
                onChange={onChange}
                placeholder={placeholder}
                onBlur={onBlur}
                type={type}
                value={value ?? ''}
                readOnly={readOnly ?? false}
            />
            {
            type === "password" ? 
            <button className={styles.eye}
                onClick={checkPassword}
                onMouseDown={(e) => {
                    e.preventDefault();
                    document.getElementById(id).setAttribute('type', 'text');
                }}
                onMouseUp={(e) => {
                    e.preventDefault();
                    document.getElementById(id).setAttribute('type', 'password');
                }}
                onMouseMove={(e) => {
                    e.preventDefault();
                    document.getElementById(id).setAttribute('type', 'password');
                }}
            >
                <img src={Eye.src} alt="" />
            </button>
            : null
        }
            {error && !required && <span className={styles.input_error}>{error}</span>}
        </div>
    )
}