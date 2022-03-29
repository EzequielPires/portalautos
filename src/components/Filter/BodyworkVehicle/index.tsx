import styles from "./styles.module.scss"
import {Checkbox} from "../../Checkbox";
import {ButtonMore} from "../../ButtonMore";
import { useContext } from "react";
import { FilterContext } from "../../../contexts/FilterContext";

export function BodyworkVehicle() {
    const {filter} = useContext(FilterContext);
    return (
        <div className={styles.bodywork_vehicle}>
            <span className={styles.title}>Carroceria</span>
            <div className="d-flex gap-2 flex-column">
                {filter.categories.options?.map(item => (
                    <Checkbox key={item.id} id={item.id} label={item.name} type={"category"} {...filter.categories}/>
                ))}
            </div>
            <div className="d-flex justify-content-end mt-3">
                <ButtonMore />
            </div>
        </div>
    )
}