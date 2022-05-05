import styles from "./styles.module.scss";
import {useSelect} from "../../../hooks/useSelect";
import {Select} from "../../Select";

export function YearVehicle() {
    const year_min = useSelect();
    const year_max = useSelect();
    return (
        <div className={styles.year_vehicle}>
            <span className={styles.title}>Ano do veículo</span>
            <div className="d-flex gap-3">
                <Select
                    label="Max"
                    placeholder=""
                    options={[]}
                    onChange={year_min.onChange}
                    value={year_min.value}
                    error={year_min.error}
                    validate={year_min.validate}
                />
                <Select
                    label="Min"
                    placeholder=""
                    options={[]}
                    onChange={year_min.onChange}
                    value={year_min.value}
                    error={year_min.error}
                    validate={year_min.validate}
                />
            </div>
        </div>
    )
}