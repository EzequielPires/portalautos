import styles from "./styles.module.scss";
import {Checkbox} from "../../Checkbox";
import {ButtonMore} from "../../ButtonMore";
import {useCheckbox} from "../../../hooks/useCheckbox";

export function CharacteristicsVehicle() {
    const aceita_troca = useCheckbox();
    const alienado = useCheckbox();
    const garantia_fabrica = useCheckbox();
    const ipva_pago = useCheckbox();
    return (
        <div className={styles.characteristics_vehicle}>
            <span className={styles.title}>Características</span>
            <div className="d-flex gap-2 flex-column">
                <Checkbox id="aceita_troca" label="Aceita troca" {...aceita_troca} />
                <Checkbox id="alienado" label="Alienado" {...alienado} />
                <Checkbox id="garantia_fabrica" label="Garantia de fábrica" {...garantia_fabrica} />
                <Checkbox id="ipva_pago" label="IPVA pago" {...ipva_pago} />
            </div>
            <div className="d-flex justify-content-end mt-3">
                <ButtonMore />
            </div>
        </div>
    )
}