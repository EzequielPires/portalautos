import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AuthContext } from "../../contexts/AuthContext";
import { FaBullhorn, FaHandsHelping, FaHeart, FaNetworkWired, FaQuestion, FaRegHeart, FaSignOutAlt, FaUserEdit, FaUsers } from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";

export function MenuAside() {
    const { user, signOut } = useContext(AuthContext);
    const router = useRouter();
    const [routeActive, setRouteActive] = useState('');

    useEffect(() => {
        let array_routes = router.route.split('/', 5);
        array_routes[2] === 'anunciar' || array_routes[2] === 'editar' ? setRouteActive('anunciar') : setRouteActive(array_routes[array_routes.length - 1]);
    }, [router]);

    return (
        <nav className={styles.menu_aside}>
            <div className={styles.menu_brand}>
                <Link href="/">
                    <a >
                        <img src={Logo.src} alt="" />
                    </a>
                </Link>
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
                                <FaBullhorn />
                            </span>
                            Meus anúncios
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/favoritos">
                        <a className={routeActive === "favoritos" ? styles.active : null}>
                            <span>
                                <FaHeart />
                            </span>
                            Favoritos
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/leads">
                        <a className={routeActive === "leads" ? styles.active : null}>
                            <span>
                                <FaUsers />
                            </span>
                            Leads
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/integracoes">
                        <a className={routeActive === "integracoes" ? styles.active : null}>
                            <span>
                                <FaNetworkWired />
                            </span>
                            Integrações
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/editar-perfil">
                        <a className={routeActive === "editar-perfil" ? styles.active : null}>
                            <span>
                                <FaUserEdit />
                            </span>
                            Editar perfil
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/ajuda">
                        <a>
                            <span>
                                <FaQuestion />
                            </span>
                            Ajuda
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <a>
                            <span>
                                <FaSignOutAlt />
                            </span>
                            Sair da conta
                        </a>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}