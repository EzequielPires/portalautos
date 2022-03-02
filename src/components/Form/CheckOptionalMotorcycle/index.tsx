import { useContext, useEffect, useRef } from "react";
import { MotorcycleContext } from "../../../contexts/MotorcycleContext";
import styles from "./styles.module.scss";

export function CheckOptionalMotorcycle({ value, type }) {
    const refInput = useRef(null);
    const { addCheck, removeCheck, optionals, characteristics, safety } = useContext(MotorcycleContext);

    const handleChange = () => {
        refInput.current.checked ? addCheck(value, type) : removeCheck(value, type);
    }

    useEffect(() => {
        {
            type === "characteristics" ?
                characteristics.forEach(item => {
                    if (value.id === item.id) {
                        refInput.current.checked = true;
                    }
                })
                :
                null
        }
        {
            type === "optional" ?
                optionals.forEach(item => {
                    if (value.id === item.id) {
                        refInput.current.checked = true;
                    }
                })
                :
                null
        }
        {
            type === "safety" ?
                safety.forEach(item => {
                    if (value.id === item.id) {
                        refInput.current.checked = true;
                    }
                })
                :
                null
        }
    }, [optionals]);

    return (
        <div className={styles.checkbox}>
            <input type="checkbox" name={value.id} id={value.id} ref={refInput} onChange={e => handleChange()} />
            <label htmlFor={value.id}>{value.name}</label>
        </div>
    );
}