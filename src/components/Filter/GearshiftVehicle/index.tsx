import styles from "./styles.module.scss";
import {Checkbox} from "../../Checkbox";
import {ButtonMore} from "../../ButtonMore";
import {useCheckbox} from "../../../hooks/useCheckbox";

export function GearshiftVehicle() {
    const automatico = useCheckbox();
    const manual = useCheckbox();
    return (
        <div className={styles.gearshift_vehicle}>
            <span className={styles.title}>Câmbio</span>
            <div className="d-flex gap-2 flex-column">
                <Checkbox id="automatico" label="Automático" {...automatico} />
                <Checkbox id="manual" label="Manual" {...manual} />
            </div>
            <div className="d-flex justify-content-end mt-3">
                <ButtonMore />

            </div>
        </div>
    )
}