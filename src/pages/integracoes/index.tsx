import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { MenuAside } from "../../components/MenuAside";
import { Navbar } from "../../components/Navbar";
import WebmotorsLogo from "../../assets/logos/webmotors.svg";
import ICarrosLogo from "../../assets/logos/icarros.png";
import OlxLogo from "../../assets/logos/olx.png";
import MercadoLivreLogo from "../../assets/logos/mercado-livre.png";
import styles from "./styles.module.scss";
import { FaCogs, FaFacebook, FaPlus } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import ReactFacebookLogin from "react-facebook-login-typed";
import { api } from "../../services/api";
import { MdOutlineRemove } from "react-icons/md";
import { AlertContext } from "../../contexts/AlertContext";
import Router from "next/router";
import Link from "next/link";

export default function Integracoes() {
    const [show, setShow] = useState(false);
    const [integrations, setIntegrations] = useState(null);
    const { alertShow } = useContext(AlertContext);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [error, setError] = useState(false);

    const handleIntegrationFacebook = async (accessToken) => {
        const data = new FormData();
        data.append('access_token', accessToken);
        const res: any = await api.post('/integration/facebook', data);
        if (res.data.success) {
            handleClose();
            alertShow("success", "Itegração com Facebook realizada com sucesso.");
        } else {
            handleClose();
            alertShow("danger", "Falha na itegração com Facebook.");
        }
    }
    const handleIntegrations = async () => {
        let error = false;
        try {
            await api.get('/integration');
        } catch(err) {
            Router.push('/minha-loja?origin=/integracoes')
        }
    }
    if (error) {
        return (
            <>
                <p>Para acessar essa página é necessário ter uma loja criada!</p>
                <Link href={'/minha-loja?r=integracoes'}>
                    <a>Criar loja</a>
                </Link>
            </>
        )
    }
    useEffect(() => {
        handleIntegrations();
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <title>Meus anúncios</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <header className="d-flex">
                <Navbar />
                <MenuAside />
            </header>
            <div className={styles.content}>
                <div className="d-flex justify-content-between flex-wrap">
                    <div className="d-flex flex-column">
                        <h2 className={styles.title}>Seu anúncio para todo o Brasil</h2>
                        <p className={styles.subtitle}>Integre o seus anúncios com diversas plataformas de vendas de veículos e aumente sua chance de sucesso.</p>
                    </div>
                </div>
                <div className={styles.integrations}>
                    <h2>Integração de leads</h2>
                    <div className="d-flex flex-wrap gap-4 mt-4">
                        <div className={styles.card}>
                            <div className={styles.logo}>
                                <FaFacebook />
                            </div>
                            <span className={styles.name}>Facebook</span>
                            <span className={styles.status}>{integrations?.facebook?.length > 0 ? 'Integração ativada' : 'Integração desativada'}</span>
                            <button onClick={handleShow}>{integrations?.facebook?.length > 0 ? <><MdOutlineRemove /> Desativar integração</> : <><FaPlus />Ativar integração</>}</button>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.logo}>
                                <img src={WebmotorsLogo.src} alt="" />
                            </div>
                            <span className={styles.name}>Webmotors</span>
                            <span className={styles.status}>Integração desativada</span>
                            <button disabled>Em Breve</button>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.logo}>
                                <img src={MercadoLivreLogo.src} alt="" />
                            </div>
                            <span className={styles.name}>Mercado Livre</span>
                            <span className={styles.status}>Integração desativada</span>
                            <button disabled>Em Breve</button>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.logo}>
                                <img src={OlxLogo.src} alt="" />
                            </div>
                            <span className={styles.name}>OLX</span>
                            <span className={styles.status}>Integração desativada</span>
                            <button disabled>Em Breve</button>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.logo}>
                                <img src={ICarrosLogo.src} alt="" />
                            </div>
                            <span className={styles.name}>iCarros</span>
                            <span className={styles.status}>Integração desativada</span>
                            <button disabled>Em Breve</button>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.table + ' row mx-0'}>
                    <div className={styles.header + " row mx-0"}>
                        <div className={styles.col + " col-md-4"}>
                            <h4>Anúncio</h4>
                        </div>
                        <div className={styles.col + " col-md-2"}>
                            <h4>Identificador</h4>
                        </div>
                        <div className={styles.col + " col-md-1"}>
                            <h4>Data</h4>
                        </div>
                        <div className={styles.col + " col-md-1"}>
                            <h4>Cor</h4>
                        </div>
                        <div className={styles.col + " col-md-4"}>
                            <h4>Postagens</h4>
                        </div>
                    </div>
                    {data?.data.vehicles?.map(item => (
                        <Row key={item.id} item={item} />
                    ))}
                </div> */}
                <Modal id={styles.modal} show={show} onHide={handleClose}>
                    <Modal.Header id={styles.modal_header} closeButton>
                        <FaCogs />
                        <Modal.Title className={styles.title}>Autorizar integração</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id={styles.modal_body}>
                        <p>Para ativar o Facebook é necessário autenticar seu acesso.</p>
                        <span>Clique em continuar para ser redirecionado e continuar com a ativação.</span>
                    </Modal.Body>
                    <Modal.Footer id={styles.modal_footer}>
                        <button onClick={handleClose}>
                            Cancelar
                        </button>
                        <ReactFacebookLogin
                            appId="279554237662721"
                            fields={"profile_id"}
                            autoLoad={false}
                            callback={(res) => handleIntegrationFacebook(res.accessToken)}
                            scope="pages_show_list,pages_read_engagement,pages_manage_posts,public_profile"
                            render={renderProps => (
                                <button type="button" onClick={renderProps.onClick}>Confirmar</button>
                            )}
                        />
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}