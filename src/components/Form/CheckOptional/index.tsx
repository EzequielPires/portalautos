import { useContext, useEffect, useRef } from "react";
import { CarContext } from "../../../contexts/CarContext";
import styles from "./styles.module.scss";

export function CheckOptional({ value, type }) {
    const refInput = useRef(null);
    const { addCheck, removeCheck, optional, safety, characteristics } = useContext(CarContext);

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
                optional.forEach(item => {
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
    }, [optional]);

    return (
        <div className={styles.checkbox}>
            <input type="checkbox" name={value.id} id={value.id} ref={refInput} onChange={e => handleChange()} />
            <label htmlFor={value.id}>{value.name}</label>
        </div>
    );
}