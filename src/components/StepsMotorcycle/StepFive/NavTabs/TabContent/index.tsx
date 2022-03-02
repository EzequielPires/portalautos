import { CheckOptional } from "../../../../Form/CheckOptional"
import { CheckOptionalMotorcycle } from "../../../../Form/CheckOptionalMotorcycle"
import styles from "./styles.module.scss"

export function TabContent({ list, type }) {
    return (
        <div className={styles.tab_content}>
            {list ?
                list.map(item => (
                    <li key={item.id}>
                        <CheckOptionalMotorcycle value={item} type={type} />
                    </li>
                ))
                : null}
        </div>
    )
}