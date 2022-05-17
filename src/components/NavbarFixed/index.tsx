import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faBullhorn, faHandshake, faQuestion, faUserEdit} from "@fortawesome/free-solid-svg-icons";
import {ButtonUser} from "../ButtonUser";
import Logo from "../../assets/logo.svg"
import styles from "./styles.module.scss";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import Link from "next/link";
import {AuthContext} from "../../contexts/AuthContext";
import {FaRegHeart} from "react-icons/fa";

export function NavbarFixed() {
    const {user} = useContext(AuthContext);
    const router = useRouter();
    const [routeActive, setRouteActive] = useState('');

    useEffect(() => {
        let array_routes = router.route.split('/', 5);
        array_routes[2] === 'anunciar' || array_routes[2] === 'editar' ? setRouteActive('anunciar') : setRouteActive(array_routes[array_routes.length - 1]);
    }, [router]);

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>
                            <img src={Logo.src} alt=""/>
                        </a>
                    </Link>
                </div>
                <div className="d-flex align-items-center w-100 gap-5 justify-content-end justify-content-lg-between">
                    <ul className={styles.list_links + " d-flex align-items-center gap-5 mb-0 h-100"} style={{marginLeft: 32}}>
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
                    </ul>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center gap-2">
                            {user ? <Link href={'/favoritos'}>
                                <a className={styles.favorites}>
                                    <FaRegHeart/>
                                </a>
                            </Link> : null}
                            <ButtonUser/>
                        </div>
                        <Link href={user ? '/cadastrar-anuncio' : '/login?r=/cadastrar-anuncio'}>
                            <a className={styles.btn_primary}>
                                Anunciar veículo
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}