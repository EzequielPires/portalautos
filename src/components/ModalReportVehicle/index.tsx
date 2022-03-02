import { useContext, useState } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { AnnouncementContext } from '../../contexts/AnnouncementContext';
import styles from './styles.module.scss';

export function ModalReportVehicle({ show, handleClose }) {
    const { report_vehicle } = useContext(AnnouncementContext);
    const [description, setDescription] = useState('');
    const [response, setResponse] = useState(null);

    const handleReportVehicle = async () => {
        setResponse(await report_vehicle('not-found-vehicle', description));
    }

    return (
        <Modal id={styles.modal} show={show} onHide={handleClose}>
            <Modal.Header>
                <h4>Não Encontrou O Que Procurava?</h4>
            </Modal.Header>
            <Modal.Body id={styles.modal_body}>
                <p>Se você não encontrou a marca, modelo ou versão do veículo que estava procurando, não se preocupe!</p>
                <p>Escreva aqui o seu problema para que possamos desenvolver uma solução.</p>
                <textarea name="" id="" cols={30} rows={5} value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Ex.: Não encontrei o veículo da marca Ford e do modelo Ka'></textarea>
                {response === false ? <Alert className="mt-4" variant="danger">Parece que o limite de reportes foi atingido.</Alert> : null}
                {response === true ? <Alert className="mt-4" variant="success">Recebemos o seu problema e logo será resolvido.</Alert> : null}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => {
                    handleReportVehicle();
                }}>
                    Continuar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}