import styles from "./styles.module.scss";
import { Checkbox } from "../../Checkbox";
import { ButtonMore } from "../../ButtonMore";
import { useCheckbox } from "../../../hooks/useCheckbox";
import { useContext } from "react";
import { FilterContext } from "../../../contexts/FilterContext";

export function FuelVehicle() {
    const { filter } = useContext(FilterContext);
    return (
        <div className={styles.gearshift_vehicle}>
            <span className={styles.title}>Combustível</span>
            <div className="d-flex gap-2 flex-column">
                {filter.fuels.options?.map(item => (
                    <Checkbox key={item.id} id={item.id} label={item.name} {...filter.fuels} />
                ))}
            </div>
            <div className="d-flex justify-content-end mt-3">
                <ButtonMore />

            </div>
        </div>
    )
}