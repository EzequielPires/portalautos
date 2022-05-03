import styles from "./styles.module.scss";

export function Icon({ name, size, color }) {
    return (
        <i
            className={styles.icon + ` fa-${name}`}
            style={{
                width: size,
                height: size,
                background: color,
                maskImage: `url(/images/icons/${name}.svg)`,
                mask: `url(/images/icons/${name}.svg)`,
                WebkitMask: `url(/images/icons/${name}.svg)`,
            }}
        ></i>
    )
}