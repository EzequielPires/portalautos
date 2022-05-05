import Link from "next/link"
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../contexts/FilterContext";

export function Checkbox({ id, label, value, add, remove, type }) {
    const route = useRouter();
    const {filter} = useContext(FilterContext);
    const {filter: link} = route.query;
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        value && value.length > 0 ? value.forEach(item => {
            item === id ? setChecked(true) : null;
        }) : null;
    }, [value]);
    const onChange = () => {
        if (checked) {
            let aopi = route.asPath.split('?');
            route.replace(`${aopi[0]}${filter.filterQuery(type, id, link)}`);
            setChecked(false);
        } else {
            let aopi = route.asPath.split('?');
            route.replace(`${aopi[0]}${filter.buildQuery(type, id, link)}`);
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