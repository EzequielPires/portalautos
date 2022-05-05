import Link from "next/link";
import { useContext, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import Logo from "../../assets/logo.svg";
import { AlertCreateUser } from "../../components/AlertCreateUser";
import { InputEmail } from "../../components/InputEmail";
import { AuthContext } from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";

import styles from "./styles.module.scss";

export default function ForgotPassword() {
    const [error, setError] = useState<void | boolean>(null);
    const [response, setResponse] = useState(false);
    const [loading, setLoading] = useState(false);
    const email = useForm('email');
    const { forgotPassword } = useContext(AuthContext);

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        let response = await forgotPassword(email.value);
        setError(response);
        if (response === false) {
            setLoading(false);
        } else {
            setLoading(false);
            setResponse(true);
        }
    }
    return (
        <div className={styles.login}>
            <div className={styles.left}>
                {!error ?
                    <form onSubmit={handleForgotPassword}>
                        <div className={styles.logo}>
                            <img src={Logo.src} alt="" />
                        </div>
                        <p className={styles.info}>Digite seu e-mail para redefinir sua senha:</p>
                        
                        <InputEmail {...email} />
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
                    <AlertCreateUser title="Foi enviado para seu email um link para recuperação de senha." link="/login"/>  
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