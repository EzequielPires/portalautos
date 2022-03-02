import styles from "./styles.module.scss";
import {Checkbox} from "../../Checkbox";
import {ButtonMore} from "../../ButtonMore";
import {useCheckbox} from "../../../hooks/useCheckbox";

export function PlateVehicle() {
    const one_two = useCheckbox();
    const three_four = useCheckbox();
    const five_six = useCheckbox();
    const seven_eight = useCheckbox();
    const none_zero = useCheckbox();
    return (
        <div className={styles.plate_vehicle}>
            <span className={styles.title}>Final da Placa</span>
            <div className="d-flex gap-2 flex-column">
                <Checkbox id="one_two" label="1 e 2" {...one_two}/>
                <Checkbox id="three_four" label="3 e 4" {...three_four}/>
                <Checkbox id="five_six" label="5 e 6" {...five_six}/>
                <Checkbox id="seven_eight" label="7 e 8" {...seven_eight}/>
                <Checkbox id="none_zero" label="9 e 0" {...none_zero}/>
            </div>
        </div>
    )
}