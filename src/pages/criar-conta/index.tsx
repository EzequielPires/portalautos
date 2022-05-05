import { faPhoneAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useContext, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import Logo from "../../assets/logo.svg";
import { AlertCreateUser } from "../../components/AlertCreateUser";
import { InputEmail } from "../../components/InputEmail";
import { InputIco } from "../../components/InputIco";
import { InputPassword } from "../../components/InputPassword";
import { UserContext } from "../../contexts/UserContext";

import styles from "./styles.module.scss";
import Head from "next/head";

export default function CriarConta() {
    const [error, setError] = useState<void | boolean>(true);
    const [loading, setLoading] = useState(false);
    const {
        createUser,
        name,
        telefone,
        password,
        password_repeat,
        email
    } = useContext(UserContext);

    const handleCreateUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (password.validate() && email.validate()) {
            let response = await createUser();
            setError(response);
            if (response != true) {
                setLoading(false);
            } else {
                setError(false);
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }

    return (
        <div className={styles.login}>
            <Head>
                <title>Criar conta</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <div className={styles.left}>
                {error ?
                    <form onSubmit={handleCreateUser}>
                        <div className={styles.logo}>
                            <img src={Logo.src} alt="" />
                        </div>
                        <p className={styles.info}>Preencha os dados abaixo para criar sua conta no Portal Classificados.</p>
                        <InputIco
                            id="name"
                            label="Nome completo*"
                            type="text"
                            ico={faUser}
                            {...name} />
                        <div className="mt-4"></div>
                        <InputIco
                            id="telefone"
                            label="Telefone*"
                            type="text"
                            ico={faPhoneAlt}
                            {...telefone} />
                        <div className="mt-4"></div>
                        <InputEmail {...email} />
                        <div className="mt-4"></div>
                        <InputPassword {...password} />
                        <div className="mt-4"></div>
                        <InputPassword {...password_repeat} />
                        {!error ? <Alert className="mt-4" variant="danger">E-mail ou senha inválida.</Alert> : null}
                        <div className="d-flex flex-column align-items-center mt-4">
                            <button className={styles.button}>
                                {loading ?
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    : null
                                }
                                Entrar
                            </button>
                            <Link href="/login">
                                <a className="mt-4">
                                    Cancelar
                                </a>
                            </Link>
                        </div>
                    </form>
                    :
                    <AlertCreateUser title="Sua conta foi criada com sucesso." link="/login"/>  
            }
            </div>
            <div className={styles.right}>
                <p>SEJA BEM-VINDO</p>
                <p>AO SITE MAIS COMPLETO
                    DE ANÚNCIOS DE VEÍCULOS
                    DA REGIÃO.</p>
                <button>SAIBA MAIS</button>
            </div>
        </div>
    );
}