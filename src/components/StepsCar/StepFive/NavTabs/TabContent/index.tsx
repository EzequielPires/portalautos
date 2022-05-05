import { CheckOptional } from "../../../../Form/CheckOptional"
import styles from "./styles.module.scss"

export function TabContent({ list, type }) {
    return (
        <div className={styles.tab_content}>
            {list ?
                list.map(item => (
                    <li key={item.id}>
                        <CheckOptional value={item} type={type} />
                    </li>
                ))
                : null}
        </div>
    )
}