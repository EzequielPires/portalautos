import styles from "./styles.module.scss";
import Modal from 'react-bootstrap/Modal'
import {useEffect, useState} from "react";
import {InputDefault} from "../InputDefault";
import {TextArea} from "../TextArea";
import { FaWhatsapp, FaFacebookF} from 'react-icons/fa';
import useForm from "../../hooks/useForm";
import { useRouter } from "next/router";

export function ModalWhatsapp({title, wpp_number}) {
    const [show, setShow] = useState(false);
    const name = useForm('name');
    const phone = useForm('tel');
    const email = useForm('email');
    const message = useForm('message');
    const router = useRouter();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        message.setValue('Olá, vi um anúncio no site portalautos.com.br e gostaria de mais informações! http://portalautos.com.br/' + router.asPath);
    }, [])

    return (
        <>
            <button
                disabled={wpp_number ? false : true}
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
                </Modal.Body>
                <Modal.Footer id={styles.modal_footer}>
                    <button
                        onClick={handleClose}
                        className={styles.btn_secondary}
                    >
                        Voltar
                    </button>
                    <a
                        href={`https://api.whatsapp.com/send?phone=55${wpp_number}&text=${message.value}`}
                        className={styles.btn_submit + " d-flex align-items-center justify-content-center gap-2"}
                    >
                        Enviar mensagem
                    </a>
                </Modal.Footer>
            </Modal>
        </>
    );
}