import FacebookLogin from 'react-facebook-login-typed';
import { InputEmail } from "../../components/InputEmail";
import { InputPassword } from "../../components/InputPassword";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Alert, Spinner } from "react-bootstrap";
import Logo from "../../assets/logo.svg";

import styles from "./styles.module.scss";
import Head from "next/head";

export default function Login() {
    const [error, setError] = useState<void | boolean>(true);
    const [loading, setLoading] = useState(false);
    const {
        signIn,
        signInFacebook,
        verify,
        password,
        email
    } = useContext(AuthContext);

    const responseFacebook = async (response) => {
        await signInFacebook(response);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (password.validate() && email.validate()) {
            let response = await signIn();
            setError(response);
            if (response === false) {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }

    useEffect(() => {
        verify();
    }, []);

    return (
        <div className={styles.login}>
            <Head>
                <title>Login</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <div className={styles.left}>
                <form onSubmit={handleSignIn}>
                    <div className={styles.logo}>
                        <img src={Logo.src} alt="" />
                    </div>
                    <p className={styles.info}>Para ver e gerenciar as informações da sua conta, entre abaixo.</p>
                    <InputEmail {...email} />
                    <div className="mt-4"></div>
                    <InputPassword {...password} />
                    {!error ? <Alert className="mt-4" variant="danger">E-mail ou senha inválida.</Alert> : null}
                    <div className="d-flex justify-content-end mt-4">
                        <Link href="/forgot-password">
                            <a >Esqueci minha senha</a>
                        </Link>
                    </div>
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
                        <span className="my-4">ou</span>
                        <FacebookLogin
                                appId="411944480459855"
                                autoLoad={false}
                                callback={responseFacebook}
                                render={renderProps => (
                                    <button type="button" className="w-100" style={{ background: "#395799" }} onClick={renderProps.onClick}>Entrar com Facebook</button>
                                )}
                            />
                        <Link href="/criar-conta">
                            <a className="mt-4">
                                <span>Não tem uma conta?</span> Crie a sua!
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
            <div className={styles.right}>
                <p>SEJA BEM-VINDO</p>
                <p>A PLATAFORMA DE DIVULGAÇÃO DE VEÍCULOS MAIS COMPLETA DA REGIÃO.</p>
                <button>SAIBA MAIS</button>
            </div>
        </div>
    )
}