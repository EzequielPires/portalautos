import styles from "./styles.module.scss";
import {useContext, useState} from "react";
import {Checkbox} from "../../Checkbox";
import {useCheckbox} from "../../../hooks/useCheckbox";
import { FilterContext } from "../../../contexts/FilterContext";

export function StateVehicle() {
    const {filter} = useContext(FilterContext);
    return (
        <div className={styles.state_vehicle}>
            <span className={styles.title}>Carros</span>
            <div className="d-flex gap-5">
                <Checkbox id='0' label="Novos" type="state" {...filter.state}/>
                <Checkbox id='1' label="Usados" type="state" {...filter.state}/>
            </div>
        </div>
    )
}