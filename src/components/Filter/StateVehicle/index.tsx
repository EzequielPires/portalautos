import styles from "./styles.module.scss";
import {useState} from "react";
import {Checkbox} from "../../Checkbox";
import {useCheckbox} from "../../../hooks/useCheckbox";

export function StateVehicle() {
    const vehicleNew = useCheckbox();
    const vehicleUsed = useCheckbox();
    return (
        <div className={styles.state_vehicle}>
            <span className={styles.title}>Carros</span>
            <div className="d-flex gap-5">
                <Checkbox id="new" label="Novos" {...vehicleNew}/>
                <Checkbox id="used" label="Usados" {...vehicleUsed}/>
            </div>
        </div>
    )
}