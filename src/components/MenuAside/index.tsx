import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faBullhorn, faHandshake, faQuestion, faSignOutAlt, faUserEdit} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../contexts/AuthContext";
import {useRouter} from "next/router";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export function MenuAside() {
    const {user, signOut} = useContext(AuthContext);
    const router = useRouter();
    const [routeActive, setRouteActive] = useState('');

    useEffect(() => {
        let array_routes = router.route.split('/', 5);
        array_routes[2] === 'anunciar' || array_routes[2] === 'editar' ? setRouteActive('anunciar') : setRouteActive(array_routes[array_routes.length - 1]);
    }, [router]);

    return (
        <nav className={styles.menu_aside}>
            <div className={styles.menu_brand}>
                <p>LOGO</p>
            </div>
            <div className={styles.menu_profile}>
                <div className={styles.avatar}>
                    <span>
                        {user ? user.name.substring(0, 1) : ''}
                    </span>
                </div>
                <span>Minha conta</span>
                <h4 className={styles.user_name}>{user ? user.name : ''}</h4>
                <p className={styles.user_email}>{user ? user.email : ''}</p>
                <Link href="/minha-loja"><a className={styles.view_story_link}>VER MINHA LOJA</a></Link>
            </div>
            <ul className={styles.menu_links}>
                <li>
                    <Link href="/meus-anuncios">
                        <a className={routeActive === "meus-anuncios" ? styles.active : null}>
                            <span>
                                <FontAwesomeIcon icon={faBullhorn as IconProp}/>
                            </span>
                            Meus anúncios
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/minhas-vendas">
                        <a className={routeActive === "minhas-vendas" ? styles.active : null}>
                            <span>
                                <FontAwesomeIcon icon={faHandshake as IconProp}/>
                            </span>
                            Minhas vendas
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/editar-perfil">
                        <a className={routeActive === "editar-perfil" ? styles.active : null}>
                            <span>
                                <FontAwesomeIcon icon={faUserEdit as IconProp}/>
                            </span>
                            Editar perfil
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/ajuda">
                        <a>
                            <span>
                                <FontAwesomeIcon icon={faQuestion as IconProp}/>
                            </span>
                            Ajuda
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <a>
                            <span>
                                <FontAwesomeIcon icon={faSignOutAlt as IconProp}/>
                            </span>
                            Sair da conta
                        </a>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}