import styles from "./styles.module.scss";
import { Accordion } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

export function VehicleItems({ vehicle }) {
    return (
        <Accordion.Item eventKey="3" className={styles.vehicle_items}>
            <Accordion.Header>
                <span className={styles.title_section}>Itens de veículo</span>
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-wrap gap-4">
                <div className="d-flex flex-wrap gap-2">
                    {vehicle?.items?.safety?.map(item => (
                        <div key={item.id} className={styles.item + " mb-3"}>
                            <div className={"d-flex align-items-center gap-2"}>
                                <FaCheck /> <strong>{item.name}</strong>
                            </div>
                        </div>
                    ))}
                    {vehicle?.items?.comfort?.map(item => (
                        <div key={item.id} className={styles.item + " mb-3"}>
                            <div className={"d-flex align-items-center gap-2"}>
                                <FaCheck /> <strong>{item.name}</strong>
                            </div>
                        </div>
                    ))}
                    {vehicle?.items?.safety?.map(item => (
                        <div key={item.id} className={styles.item + " mb-3"}>
                            <div className={"d-flex align-items-center gap-2"}>
                                <FaCheck /> <strong>{item.name}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
}