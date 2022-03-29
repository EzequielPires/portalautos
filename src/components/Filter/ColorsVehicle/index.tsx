import styles from "./styles.module.scss";
import {useCheckbox} from "../../../hooks/useCheckbox";
import {Checkbox} from "../../Checkbox";
import {ButtonMore} from "../../ButtonMore";
import { useContext } from "react";
import { FilterContext } from "../../../contexts/FilterContext";

export function ColorsVehicle() {
    const { filter } = useContext(FilterContext);
    return (
        <div className={styles.colors_vehicle}>
            <span className={styles.title}>Cores</span>
            <div className="d-flex gap-2 flex-column">
            {filter.colors.options?.map(item => (
                    <Checkbox key={item.id} id={item.id} label={item.name} {...filter.colors} />
                ))}
            </div>
            <div className="d-flex justify-content-end mt-3">
                <ButtonMore />
            </div>
        </div>
    )
}