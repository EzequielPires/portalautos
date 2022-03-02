import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBullhorn, faHandshake, faQuestion, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { ButtonUser } from "../ButtonUser";
import Logo from "../../assets/logo.svg"
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
                {routeActive === "meus-anuncios" ?
                    <div className={styles.title}>
                        <FontAwesomeIcon icon={faBullhorn} />
                        <h4>MEUS ANÚNCIOS</h4>
                    </div> : null
                }
                {routeActive === "minhas-vendas" ?
                    <div className={styles.title}>
                        <FontAwesomeIcon icon={faHandshake} />
                        <h4>MINHAS VENDAS</h4>
                    </div> : null
                }
                {routeActive === "editar-perfil" ?
                    <div className={styles.title}>
                        <FontAwesomeIcon icon={faUserEdit} />
                        <h4>EDITAR PERFIL</h4>
                    </div> : null
                }
                {routeActive === "ajuda" ?
                    <div className={styles.title}>
                        <FontAwesomeIcon icon={faQuestion} />
                        <h4>AJUDA</h4>
                    </div> : null
                }

                <ButtonUser />
            </nav>
        </header>
    )
}