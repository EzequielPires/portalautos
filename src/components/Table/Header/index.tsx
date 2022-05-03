import styles from './styles.module.scss';

export function Header({ children }) {
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}