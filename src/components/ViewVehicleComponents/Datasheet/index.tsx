import styles from "./styles.module.scss";
import {Accordion} from "react-bootstrap";
import {FaCheck} from "react-icons/fa";

export function Datasheet() {
    return (
        <Accordion.Item eventKey="1" className={styles.datasheet}>
            <Accordion.Header>
                <span className={styles.title_section}>Ficha Técnica</span>
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-wrap gap-3">
                <div className="d-flex flex-wrap gap-3">
                    <div className={styles.item}>
                        <span>Carroceria</span>
                        <strong>Picape</strong>
                    </div>
                    <div className={styles.item}>
                        <span>Estilo</span>
                        <strong>Picape</strong>
                    </div>
                    <div className={styles.item}>
                        <span>Combustível</span>
                        <strong>Diesel</strong>
                    </div>
                    <div className={styles.item}>
                        <span>Sistema de combustível</span>
                        <strong>Injeção eletrônica</strong>
                    </div>
                </div>
                <div className="d-flex flex-wrap gap-3">
                    <div className={styles.item}>
                        <span>Câmbio de marchas</span>
                        <strong>Manual</strong>
                    </div>
                    <div className={styles.item}>
                        <span>Quant. de portas</span>
                        <strong>4</strong>
                    </div>
                    <div className={styles.item}>
                        <span>Final de placa</span>
                        <strong>0</strong>
                    </div>
                    <div className={styles.item}>
                        <span>Cor</span>
                        <strong>Preto</strong>
                    </div>
                </div>
                <div className="d-flex flex-wrap gap-3">
                    <div className={styles.item}>
                        <span>Único dono</span>
                        <strong>Sim</strong>
                    </div>
                    <div className={styles.item}>
                        <span>Aceita troca</span>
                        <strong>Sim</strong>
                    </div>
                    <div className={styles.item}>
                        <span>Condição</span>
                        <strong>Novo</strong>
                    </div>
                    <div className={styles.item}>
                        <span>Alienado</span>
                        <strong>Sim</strong>
                    </div>
                </div>
                <div className="d-flex flex-wrap gap-3">
                    <div className={styles.item}>
                        <span>IPVA pago</span>
                        <strong>Sim</strong>
                    </div>
                    <div className={styles.item}>
                        <span>Licenciado</span>
                        <strong>Sim</strong>
                    </div>
                    <div className={styles.item}>
                        <span>Garantia de fábrica</span>
                        <strong>Sim</strong>
                    </div>
                    <div className={styles.item}>
                        <span>Revisões feitas</span>
                        <strong>Sim</strong>
                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    )
}