import Link from "next/link";
import { ButtonUser } from "../ButtonUser";
import Logo from "../../assets/logo.svg";

import styles from "./styles.module.scss";

export function NavbarSecondary({ title }) {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="/meus-anuncios">
                        <a >
                            <img src={Logo.src} alt="" />
                        </a>
                    </Link>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <ButtonUser />
                </div>
            </nav>
            <div className={styles.title}>
                <h4>{title}</h4>
            </div>
        </header>
    )
}