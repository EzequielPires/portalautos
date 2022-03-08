import router from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

import {
    faBars,
    faBullhorn,
    faChevronDown,
    faHandshake,
    faQuestion,
    faSignOutAlt,
    faUser,
    faUserEdit
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function ButtonUser() {
    const [userName, setUserName] = useState('');
    const { user, signOut } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    useEffect(() => {
        if (user && user.name) {
            let split = user.name.split(' ');
            {
                split.length >= 2 ? setUserName(split[0] + ' ' + split[split.length - 1]) : setUserName(split[0]);
            }

        }
    }, [user]);
    return (
        <div className={show ? styles.show + ' ' + styles.button_user : styles.button_user}>
            {user ?
                <button className={styles.btn} onClick={user ? () => handleShow() : () => router.push('/login')}>
                    {user ?
                        <>
                            <FontAwesomeIcon icon={faUser as IconProp} />{userName}<FontAwesomeIcon
                                icon={faChevronDown as IconProp} />
                        </> : "Entrar"}
                </button> :
                <Link href="/login">
                    <a className={styles.btn_sign_in}>
                        <AiOutlineUser />
                        Entrar
                    </a>
                </Link>
            }
            <button className={styles.btn_collapse} onClick={handleShow}>
                <FontAwesomeIcon icon={faBars as IconProp} />
            </button>
            <ul className={show ? styles.show + ' ' + styles.body : styles.body}>
                <li className={"d-flex justify-content-between"} style={{ background: '#1d1d1d' }}>
                    <button className={"text-capitalize"} onClick={() => {
                        { user ? null : router.push('/login') }
                    }}>
                        {user ?
                            <>
                                {userName}
                            </> : "Entrar"}
                    </button>
                    <button onClick={handleShow} className={styles.btn_closed}>
                        <IoClose />
                    </button>
                </li>
                {user ?
                    <>
                        <li>
                            <Link href="/meus-anuncios">
                                <a className={styles.active}>
                                    <span>
                                        <FontAwesomeIcon icon={faBullhorn as IconProp} />
                                    </span>
                                    Meus anúncios
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/minhas-vendas">
                                <a>
                                    <span>
                                        <FontAwesomeIcon icon={faHandshake as IconProp} />
                                    </span>
                                    Minhas vendas
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/editar-perfil">
                                <a>
                                    <span>
                                        <FontAwesomeIcon icon={faUserEdit as IconProp} />
                                    </span>
                                    Editar perfil
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/ajuda">
                                <a>
                                    <span>
                                        <FontAwesomeIcon icon={faQuestion as IconProp} />
                                    </span>
                                    Ajuda
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/login">
                                <a>
                                    <span>
                                        <FontAwesomeIcon icon={faSignOutAlt as IconProp} />
                                    </span>
                                    Sair da conta
                                </a>
                            </Link>
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <Link href="/">
                                <a>Comprar</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Vender</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Serviços</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Ajuda</a>
                            </Link>
                        </li>
                    </>
                }
            </ul>
            <div className={styles.overflow} onClick={handleShow}></div>
        </div>
    );
}