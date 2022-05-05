import { faEnvelope, faIdCard, faLock, faPhoneAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { InputDefault } from "../../components/InputDefault";
import { InputEmail } from "../../components/InputEmail";
import { InputIco } from "../../components/InputIco";
import { InputPassword } from "../../components/InputPassword";
import { InputZipcode } from "../../components/InputZipcode";
import { Loading } from "../../components/Loading";
import { MenuAside } from "../../components/MenuAside";
import { Navbar } from "../../components/Navbar";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";
import styles from "./styles.module.scss";
import Head from "next/head";
import { ModalAlterPassword } from "../../components/ModalAlterPassword";
import useModal from "../../hooks/useModal";

export default function EditProfile() {
    const [error, setError] = useState<void | boolean>(true);
    const [response, setResponse] = useState(false);
    const [loading, setLoading] = useState(false);
    const modalPassword = useModal();
    const {
        user,
        readCpf,
        buildUser,
        editUser,
    } = useContext(UserContext);

    useEffect(() => {
        setLoading(true);
        buildUser().then(() => setLoading(false));
        user.password.setValue("********");
    }, []);

    async function handleEditUser(e) {
        e.preventDefault();
        setResponse(false);
        if (
            user.name.validate()
            && user.email.validate()
            && user.cpf.validate()
            && user.address.zipcode.validate()
            && user.cell_phone.validate()
        ) {
            setLoading(true);
            let response = await editUser();
            setError(response);
            if (response === false || response != true) {
                setLoading(false);
                setError(false);
                setResponse(false);
            } else {
                setLoading(false);
                setResponse(true);
            }
        }
    }

    return (
        <div className={styles.edit_profile}>
            {loading ? <Loading /> : null}
            <Head>
                <title>Editar Perfil</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <header className="d-flex">
                <Navbar />
                <MenuAside />
            </header>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Minha conta</h2>
                    <hr />
                </div>
                <form className="d-flex flex-column gap-4" onSubmit={handleEditUser}>
                    <div className={styles.group_inputs + " d-flex flex-wrap gap-4"}>
                        <InputIco
                            id="name"
                            label="Nome completo*"
                            type="text"
                            ico={faUser}
                            {...user.name} />
                        <InputIco
                            id="cpf"
                            label="CPF*"
                            type="text"
                            ico={faIdCard}
                            readOnly={readCpf}
                            {...user.cpf} />
                    </div>
                    <div className={styles.group_inputs + " d-flex flex-wrap gap-4"}>
                        <InputIco
                            id="email"
                            label="Email*"
                            type="email"
                            ico={faEnvelope}
                            readOnly={true}
                            {...user.email} />
                        <InputIco
                            id="telefone"
                            label="Telefone*"
                            type="text"
                            ico={faPhoneAlt}
                            {...user.cell_phone} />
                    </div>
                    <div className={styles.input_box}>
                            <InputIco
                            id="password"
                            label="Password*"
                            type="password"
                            ico={faLock}
                            readOnly={true}
                            {...user.password} />
                            <button className={styles.btn_submit} onClick={e => {
                                e.preventDefault();
                                modalPassword.handleShow();
                            }}>Alterar password</button>
                    </div>
                    <div id="adress" className="d-flex flex-column">
                        <div className="d-flex flex-column">
                            <h4>Endereço</h4>
                            <hr />
                        </div>
                        <div className={styles.group_inputs + " d-flex flex-wrap gap-4"}>
                            <InputZipcode
                                id="cep"
                                label="Cep*"
                                type="text"
                                {...user.address.zipcode} />
                            <InputDefault
                                id="state"
                                label="Estado*"
                                type="text"
                                readOnly={true}
                                {...user.address.state} />
                            <InputDefault
                                id="city"
                                label="Cidade*"
                                type="text"
                                readOnly={true}
                                {...user.address.city} />
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-start w-100">
                            {!error ? <Alert className="mt-4" variant="danger">Ops, algo deu errado, tente com outros dados.</Alert> : null}
                            {response ? <Alert className="mt-4" variant="success">Alterações realizadas com sucesso.</Alert> : null}
                            <button className={styles.btn_submit} disabled={loading}>
                                Salvar alterações
                            </button>
                        </div>
                </form>
            </div>
            <ModalAlterPassword modal={modalPassword}/>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['nextauth.token']: token } = parseCookies(ctx);
    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }
    return {
        props: {
        }
    }
}