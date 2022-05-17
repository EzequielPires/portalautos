import styles from './styles.module.scss';

export function TabButton({ Link, Active, onClick }) {
    return (
        <button
            className={Link === Active ? styles.button_active : styles.button}
            onClick={onClick}
        >
            {Link}
        </button>
    );
}