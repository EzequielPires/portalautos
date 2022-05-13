import {useEffect, useState} from "react";
import styles from "./styles.module.scss";
import {Modal} from "react-bootstrap";
import {Select} from "../Select";
import {api} from "../../services/api";

export function ModalFilterMyAnnouncement({filter}) {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(1);
    const handleShow = () => setShow(!show);

    const getBrands = async () => {
        filter.model.setValue('0');
        api.get(`fipe/${active === 1 ? 'car' : 'motorcycle'}/brand/list`).then(res => filter.brand.setOptions(res.data.data));
    };

    const getModels = async () => {
        api.get(`fipe/${active === 1 ? 'car' : 'motorcycle'}/${filter.brand.value}/list`).then(res => filter.model.setOptions(res.data.data));
    }
    useEffect(() => {
        getModels();
    }, [filter.brand.value]);
    useEffect(() => {
        filter.brand.setValue('0');
        getBrands();
    }, [active]);

    return (
        <>
            <button className={styles.button} onClick={handleShow}>Busca Avançada</button>
            <Modal id={styles.modal} show={show} onHide={handleShow}>
                <Modal.Header className={styles.header}>
                    <div className={styles.toggle}>
                        <button className={active === 1 && styles.active} onClick={() => setActive(1)}>Carros</button>
                        <button className={active === 2 && styles.active} onClick={() => setActive(2)}>Motos</button>
                    </div>
                </Modal.Header>
                <Modal.Body className={styles.body}>
                    <Select
                        label={"Marca*"}
                        options={filter.brand.options}
                        onChange={filter.brand.onChange}
                        value={filter.brand.value}
                        error={null}
                        validate={filter.brand.validate}
                    />
                    <Select
                        label={"Modelo*"}
                        options={filter.model.options}
                        onChange={filter.model.onChange}
                        value={filter.model.value}
                        error={null}
                        validate={filter.model.validate}
                    />
                </Modal.Body>
                <Modal.Footer className={styles.footer}>
                    <button onClick={handleShow}>Cancelar</button>
                    <button>Buscar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}