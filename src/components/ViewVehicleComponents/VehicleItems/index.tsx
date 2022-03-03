import styles from "./styles.module.scss";
import {Accordion} from "react-bootstrap";
import {FaCheck} from "react-icons/fa";

export function VehicleItems() {
    return (
        <Accordion.Item eventKey="3" className={styles.vehicle_items}>
            <Accordion.Header>
                <span className={styles.title_section}>Itens de veículo</span>
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-wrap gap-4">
                <div className="d-flex flex-wrap gap-2">
                    <div className={styles.item + " mb-3"}>
                        <div className={"d-flex align-items-center gap-2"}>
                            <FaCheck/> <strong>Trava elétrica</strong>
                        </div>
                    </div>
                    <div className={styles.item + " mb-3"}>
                        <div className={"d-flex align-items-center gap-2"}>
                            <FaCheck/> <strong>Airbag motorista</strong>
                        </div>
                    </div>
                    <div className={styles.item + " mb-3"}>
                        <div className={"d-flex align-items-center gap-2"}>
                            <FaCheck/> <strong>Alarme</strong>
                        </div>
                    </div>
                    <div className={styles.item + " mb-3"}>
                        <div className={"d-flex align-items-center gap-2"}>
                            <FaCheck/> <strong>Freios ABS</strong>
                        </div>
                    </div>
                    <div className={styles.item + " mb-3"}>
                        <div className={"d-flex align-items-center gap-2"}>
                            <FaCheck/> <strong>Ar condicionado</strong>
                        </div>
                    </div>
                    <div className={styles.item + " mb-3"}>
                        <div className={"d-flex align-items-center gap-2"}>
                            <FaCheck/> <strong>Direção hidráulica</strong>
                        </div>
                    </div>
                    <div className={styles.item + " mb-3"}>
                        <div className={"d-flex align-items-center gap-2"}>
                            <FaCheck/> <strong>Ajuste de altura para bancos</strong>
                        </div>
                    </div>
                    <div className={styles.item + " mb-3"}>
                        <div className={"d-flex align-items-center gap-2"}>
                            <FaCheck/> <strong>Ajuste de altura para volante</strong>
                        </div>
                    </div>
                    <div className={styles.item + " mb-3"}>
                        <div className={"d-flex align-items-center gap-2"}>
                            <FaCheck/> <strong>Computador de bordo</strong>
                        </div>
                    </div>
                    <div className={styles.item + " mb-3"}>
                        <div className={"d-flex align-items-center gap-2"}>
                            <FaCheck/> <strong>Retrovisores elétricos</strong>
                        </div>
                    </div>
                    <div className={styles.item + " mb-3"}>
                        <div className={"d-flex align-items-center gap-2"}>
                            <FaCheck/> <strong>Vidros elétricos</strong>
                        </div>
                    </div>
                    <div className={styles.item + " mb-3"}>
                        <div className={"d-flex align-items-center gap-2"}>
                            <FaCheck/> <strong>Computador de bordo</strong>
                        </div>
                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
}