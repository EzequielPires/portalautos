import styles from "./styles.module.scss";
import {Checkbox} from "../../Checkbox";
import {ButtonMore} from "../../ButtonMore";
import {useCheckbox} from "../../../hooks/useCheckbox";

export function FuelVehicle() {
    const diesel = useCheckbox();
    const flex = useCheckbox();
    return (
        <div className={styles.gearshift_vehicle}>
            <span className={styles.title}>Combustível</span>
            <div className="d-flex gap-2 flex-column">
                <Checkbox id="diesel" label="Diesel" {...diesel} />
                <Checkbox id="flex" label="Gasolina e álcool" {...flex} />
            </div>
            <div className="d-flex justify-content-end mt-3">
                <ButtonMore />

            </div>
        </div>
    )
}