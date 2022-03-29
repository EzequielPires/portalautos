import Link from "next/link"
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Checkbox({ id, label, value, add, remove, type }) {
    const route = useRouter();
    const {filter} = route.query;
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        value && value.length > 0 ? value.forEach(item => {
            item === id ? setChecked(true) : setChecked(false);
        }) : null;
    }, []);
    const onChange = () => {
        if (checked) {
            remove(id);
            setChecked(false);
        } else {
            add(id);
            setChecked(true);
        }
    }
    return (
        <div className={styles.input_box}>
            <input
                type="checkbox"
                name={id}
                id={id + label}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id + label}>{label}</label>
        </div>
    )
}