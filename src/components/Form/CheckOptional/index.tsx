import { useContext, useEffect, useRef } from "react";
import { CarContext } from "../../../contexts/CarContext";
import styles from "./styles.module.scss";

export function CheckOptional({ value, type }) {
    const refInput = useRef(null);
    const { addCheck, removeCheck, car } = useContext(CarContext);

    const handleChange = () => {
        refInput.current.checked ? addCheck(value, type) : removeCheck(value, type);
    }

    useEffect(() => {
        {
            type === "characteristics" ?
                car.characteristic.value.forEach(item => {
                    if (value.id === item.id) {
                        refInput.current.checked = true;
                    }
                })
                :
                null
        }
        {
            type === "optional" ?
                car.optional.value.forEach(item => {
                    if (value.id === item.id) {
                        refInput.current.checked = true;
                    }
                })
                :
                null
        }
        {
            type === "safety" ?
                car.safety.value.forEach(item => {
                    if (value.id === item.id) {
                        refInput.current.checked = true;
                    }
                })
                :
                null
        }
        {
            type === "comfort" ?
                car.confort.value.forEach(item => {
                    if (value.id === item.id) {
                        refInput.current.checked = true;
                    }
                })
                :
                null
        }
    }, [car.characteristic.value]);

    return (
        <div className={styles.checkbox}>
            <input type="checkbox" name={value.id} id={value.id} ref={refInput} onChange={e => handleChange()} />
            <label htmlFor={value.id}>{value.name}</label>
        </div>
    );
}