import styles from "./styles.module.scss";
import Modal from 'react-bootstrap/Modal'
import {useEffect, useState} from "react";
import { FaWhatsapp } from 'react-icons/fa';
import useForm from "../../hooks/useForm";
import { useRouter } from "next/router";
import Link from "next/link";
import {api} from "../../services/api";
import axios from "axios";

export function ModalWhatsapp({title, wpp_number, store, id_vehicle}) {
    const [show, setShow] = useState(false);
    const name = useForm('name');
    const phone = useForm('tel');
    const email = useForm('email');
    const message = useForm('message');
    const router = useRouter();
    const {id} = router.query;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        message.setValue('Olá, vi um anúncio no site portalautos.com.br e gostaria de mais informações! http://portalautos.com.br/' + router.asPath);
    }, [])
    const handleLead = async () => {
        const ip = await axios.get('https://api.ipify.org?format=json').then(res => res.data.ip);
        const data = new FormData();
        data.append('whats_app_lead[name]', name.value);
        data.append('whats_app_lead[wpp_number]', phone.value);
        data.append('whats_app_lead[vehicle]', id_vehicle);
        data.append('whats_app_lead[address_ip]', ip);
        const res = await api.post('/lead/whatsapp', data);
        console.log(res);
    }
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
                <Modal.Header closeButton id={styles.modal_header}>
                    <div className={styles.avatar}>
                        {store.logo ? <img src={"https://portalautos.com.br/" + store.logo.path} alt="" /> : <h2 className="m-0" style={{ color: "#fff" }}>{store.name.substring(0, 1).toUpperCase()}</h2>}
                    </div>
                    <div className={'d-flex flex-column'}>
                    <span className={styles.store_name}>{store.name}</span>
                        <span className={styles.status}>Online</span>
                    </div>
                </Modal.Header>
                <Modal.Body id={styles.modal_body}>
                    <div className={styles.bg_whatsapp} />
                    <div className={styles.content}>
                        <p className={styles.message_store}>
                            Olá, que tal um orçamento sem custo? 😀
                            🔥 Melhor preço e qualidade para você, nós cobrimos ofertas!
                            Me informe seu nome, email e telefone para iniciarmos uma conversa sem compromisso :)
                        </p>
                        <div className="d-flex flex-column align-items-end">
                            <input type="text" placeholder={"Digite aqui o seu nome*"} value={name.value} onChange={name.onChange}/>
                            <input type="email" placeholder={"Digite aqui o seu email*"} value={email.value} onChange={email.onChange}/>
                            <input type="text" placeholder={"Digite aqui o seu telefone*"} value={phone.value} onChange={phone.onChange}/>
                        </div>
                    </div>
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
                        target={'_blank'} rel={'noopener noreferrer'}
                        onClick={handleLead}
                        className={styles.btn_submit + " d-flex align-items-center justify-content-center gap-2"}
                    >
                        Enviar mensagem
                    </a>
                </Modal.Footer>
            </Modal>
        </>
    );
}