import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBullhorn, faHandshake, faQuestion, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { ButtonUser } from "../ButtonUser";
import Logo from "../../assets/logo.svg"
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FaHeart, FaNetworkWired } from "react-icons/fa";

export function Navbar() {
    const router = useRouter();
    const [routeActive, setRouteActive] = useState('');

    useEffect(() => {
        let array_routes = router.route.split('/', 5);
        array_routes[2] === 'anunciar' || array_routes[2] === 'editar' ? setRouteActive('anunciar') : setRouteActive(array_routes[array_routes.length - 1]);
    }, [router]);

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.brand}>
                    <img src={Logo.src} alt="" />
                </div>
                <div>
                    {routeActive === "meus-anuncios" ?
                        <div className={styles.title}>
                            <FontAwesomeIcon icon={faBullhorn as IconProp} />
                            <h4>MEUS ANÚNCIOS</h4>
                        </div> : null
                    }
                    {routeActive === "minhas-vendas" ?
                        <div className={styles.title}>
                            <FontAwesomeIcon icon={faHandshake as IconProp} />
                            <h4>MINHAS VENDAS</h4>
                        </div> : null
                    }
                    {routeActive === "editar-perfil" ?
                        <div className={styles.title}>
                            <FontAwesomeIcon icon={faUserEdit as IconProp} />
                            <h4>EDITAR PERFIL</h4>
                        </div> : null
                    }
                    {routeActive === "ajuda" ?
                        <div className={styles.title}>
                            <FontAwesomeIcon icon={faQuestion as IconProp} />
                            <h4>AJUDA</h4>
                        </div> : null
                    }
                    {routeActive === "integracoes" ?
                        <div className={styles.title}>
                            <FaNetworkWired />
                            <h4>Integrações</h4>
                        </div> : null
                    }
                    {routeActive === "minha-loja" ?
                        <div className={styles.title}>
                            <h4>Minha loja</h4>
                        </div> : null
                    }
                    {routeActive === "favoritos" ?
                        <div className={styles.title}>
                            <FaHeart />
                            <h4>Meus favoritos</h4>
                        </div> : null
                    }
                </div>
                <ButtonUser />
            </nav>
        </header>
    )
}