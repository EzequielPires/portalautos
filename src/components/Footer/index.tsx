import Link from "next/link";
import Logo from "../../assets/logo-white.svg";
import styles from "./styles.module.scss";
import {Accordion} from "react-bootstrap";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div >
                <Accordion className={styles.content_main}>
                    <Accordion.Item eventKey="0" className={styles.group}>
                        <Accordion.Header id={styles.header}>Comprar</Accordion.Header>
                        <Accordion.Body id={styles.body}>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Carros usados ou seminovos
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Carros novos
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Carros por estado
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Motos usadas ou seminovas
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Motos novas
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Motos por estado
                                </a>
                            </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className={styles.group}>
                        <Accordion.Header id={styles.header}>Vender</Accordion.Header>
                        <Accordion.Body id={styles.body}>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Vender meu veículo
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Vender minha moto
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Gerenciar meu anúncio
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Avalie seu veículo
                                </a>
                            </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className={styles.group}>
                        <Accordion.Header id={styles.header}>Serviços</Accordion.Header>
                        <Accordion.Body id={styles.body}>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    0km
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Notícias
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Financiamento
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Seguro
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Tabela fipe
                                </a>
                            </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className={styles.group}>
                        <Accordion.Header id={styles.header}>Ajuda</Accordion.Header>
                        <Accordion.Body id={styles.body}>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Para você
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Como vender
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Como comprar
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Para sua loja
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Fale conosco
                                </a>
                            </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className={styles.group}>
                        <Accordion.Header id={styles.header}>Sobre</Accordion.Header>
                        <Accordion.Body id={styles.body}>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Sobre nós
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Publicidade
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Política de Privacidade
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className={styles.link}>
                                    Termos de Uso
                                </a>
                            </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className={styles.content_botom}>
                    <img src={Logo.src} alt="Logo"/>
                    <span>© 2002-2022 PortalCatalão. Todos os direitos reservados.</span>
            </div>
        </footer>
    );
}