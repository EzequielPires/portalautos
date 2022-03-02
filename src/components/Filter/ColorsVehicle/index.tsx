import styles from "./styles.module.scss";
import {useCheckbox} from "../../../hooks/useCheckbox";
import {Checkbox} from "../../Checkbox";
import {ButtonMore} from "../../ButtonMore";

export function ColorsVehicle() {
    const azul = useCheckbox();
    const amarelo = useCheckbox();
    const bege = useCheckbox();
    const branco = useCheckbox();
    return (
        <div className={styles.colors_vehicle}>
            <span className={styles.title}>Cores</span>
            <div className="d-flex gap-2 flex-column">
                <Checkbox id="azul" label="Azul" {...azul} />
                <Checkbox id="amarelo" label="Amarelo" {...amarelo} />
                <Checkbox id="bege" label="Bege" {...bege} />
                <Checkbox id="branco" label="Branco" {...branco} />
            </div>
            <div className="d-flex justify-content-end mt-3">
                <ButtonMore />
            </div>
        </div>
    )
}