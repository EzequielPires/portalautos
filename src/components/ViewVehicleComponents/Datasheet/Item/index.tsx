import styles from "./styles.module.scss"

export function Item({title, name}) {
    return (
        <div className={styles.item}>
            <span>{title}</span>
            <strong>{name}</strong>
        </div>
    )
}