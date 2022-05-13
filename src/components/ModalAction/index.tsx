import router from "next/router";
import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { CarContext } from "../../contexts/CarContext";
import { ModalActionContext } from "../../contexts/ModalActionContext";
import { MotorcycleContext } from "../../contexts/MotorcycleContext";
import styles from "./styles.module.scss";

export function ModalAction() {
    const { show, message, handleClose, action, id, length } = useContext(ModalActionContext);
    const { editVehicle: editCar } = useContext(CarContext);
    const { activeVehicle, soldVehicle, } = useContext(AnnouncementContext);
    const { editVehicle: editMotorcycle } = useContext(MotorcycleContext);
    
    const handleAction = (e) => {
        action === "active" ? activeVehicle(id, length).then(() => handleClose()) : false;
        action === "sold" ? soldVehicle(id, length).then(() => handleClose()) : false;
        action === "finalyCar" ? editCar(e, id).then(() => {
            handleClose();
            router.push(`/admin/anuncios`)
        }) : null;
        action === "finalyMotorcycle" ? editMotorcycle(e, id).then(() => {
            handleClose();
            router.push(`/admin/anuncios`)
        }) : null;
    }

    return (
        <Modal id={styles.modal} show={show} onHide={handleClose}>
            <Modal.Body id={styles.modal_body}>
                <p>{message}</p>
                {action === 'active' ?
                    <span className={styles.alert}><strong>Atenção: </strong>Anúncios desativados serão deletados em 15 dias!</span>
                    : null
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleAction}>
                    Continuar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}