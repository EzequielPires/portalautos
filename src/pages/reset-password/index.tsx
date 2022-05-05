import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import Logo from "../../assets/logo.svg";
import { AlertCreateUser } from "../../components/AlertCreateUser";
import { InputEmail } from "../../components/InputEmail";
import { InputPassword } from "../../components/InputPassword";
import { AuthContext } from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";

import styles from "./styles.module.scss";

export default function ResetPassword() {
    const [error, setError] = useState<void | boolean>(null);
    const [response, setResponse] = useState(false);
    const [loading, setLoading] = useState(false);
    const password = useForm('password');
    const password_repeat = useForm('password');
    const { resetPassword } = useContext(AuthContext);
    const router = useRouter();
    const tokenResponse = router.query.token;
    const [tokenR, setTokenR] = useState<string | string[]>();

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        let response = await resetPassword(password.value, password_repeat.value, tokenR);
        setError(response);
        if (response === false) {
            setLoading(false);
        } else {
            setLoading(false);
            setResponse(true);
        }
    }

    useEffect(() => {
        setTokenR(tokenResponse);
    }, [tokenResponse])

    return (
        <div className={styles.login}>
            <div className={styles.left}>
                {!error ?
                    <form onSubmit={handleForgotPassword}>
                        <div className={styles.logo}>
                            <img src={Logo.src} alt="" />
                        </div>
                        <p className={styles.info}>Crie uma nova senha abaixo.</p>
                        
                        <InputPassword label="Digite sua nova senha*" {...password} />
                        <div className="mt-4"></div>
                        <InputPassword label="Digite novamente sua nova senha*" {...password_repeat} />
                        {error === false ? <Alert className="mt-4" variant="danger">E-mail ou senha inválida.</Alert> : null}
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
                                Redefinir minha senha
                            </button>
                            <Link href="/login">
                                <a className="mt-4">
                                    Cancelar
                                </a>
                            </Link>
                        </div>
                    </form>
                    :
                    <AlertCreateUser title="Sua senha foi alterada com sucesso." link="/login"/>  
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
    )
}