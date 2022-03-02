import styles from "./styles.module.scss"
import {Checkbox} from "../../Checkbox";
import {useCheckbox} from "../../../hooks/useCheckbox";
import {ButtonMore} from "../../ButtonMore";

export function BodyworkVehicle() {
    const hatchs = useCheckbox();
    const jipes = useCheckbox();
    const picapes = useCheckbox();
    const sedans = useCheckbox()
    return (
        <div className={styles.bodywork_vehicle}>
            <span className={styles.title}>Carroceria</span>
            <div className="d-flex gap-2 flex-column">
                <Checkbox id="hatchs" label="Hatchs" {...hatchs}/>
                <Checkbox id="jipes" label="Jipes" {...jipes}/>
                <Checkbox id="picapes" label="Picapes" {...picapes}/>
                <Checkbox id="sedans" label="Sedans" {...sedans}/>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <ButtonMore />
            </div>
        </div>
    )
}