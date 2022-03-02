import { Spinner } from "react-bootstrap";
import styles from "./styles.module.scss";

export function Loading() {
    return (
        <div className={styles.loading}>
            <Spinner animation="border" role="status" variant="light">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}