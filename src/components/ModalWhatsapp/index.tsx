import styles from "./styles.module.scss";
import Modal from 'react-bootstrap/Modal'
import {useEffect, useState} from "react";
import {InputDefault} from "../InputDefault";
import {TextArea} from "../TextArea";
import { FaWhatsapp, FaFacebookF} from 'react-icons/fa';
import useForm from "../../hooks/useForm";

export function ModalWhatsapp({title}) {
    const [show, setShow] = useState(false);
    const name = useForm('name');
    const phone = useForm('tel');
    const email = useForm('email');
    const message = useForm('message');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        message.setValue('Olá, vi um anúncio no site portalautos.com.br e gostaria de mais informações! https://www.portalautos.com.br/comprar/22021011072');
    }, [])

    return (
        <>
            <button
                onClick={handleShow}
                className={styles.btn_primary + " d-flex align-items-center justify-content-center gap-2"}
            >
                <FaWhatsapp />
                {title}
            </button>

            <Modal show={show} onHide={handleClose} id={styles.modal}>
                <Modal.Header closeButton id={styles.modal_header}></Modal.Header>
                <Modal.Body id={styles.modal_body}>
                    <InputDefault
                        label="Nome completo*"
                        onChange={name.onChange}
                        value={name.value}
                        onBlur={name.onBlur}
                        type={'text'}
                        error={name.error}
                        placeholder={'Digite seu nome'}
                    />
                    <div className="mt-4"></div>
                    <InputDefault
                        label="Telefone*"
                        onChange={phone.onChange}
                        value={phone.value}
                        onBlur={phone.onBlur}
                        type={'text'}
                        error={phone.error}
                        placeholder={'Ex.: (00) 00000-0000'}
                    />
                    <div className="mt-4"></div>
                    <TextArea
                        label="Mensagem"
                        placeholder="Digite aqui a sua mensagem"
                        onChange={message.onChange}
                        value={message.value}
                        onBlur={message.onBlur}
                        type="text"
                        error={message.error}
                        required={true}
                    />
                </Modal.Body>
                <Modal.Footer id={styles.modal_footer}>
                    <button
                        onClick={handleClose}
                        className={styles.btn_secondary}
                    >
                        Voltar
                    </button>
                    <button
                        onClick={handleClose}
                        className={styles.btn_submit + " d-flex align-items-center justify-content-center gap-2"}
                    >
                        Enviar mensagem
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}