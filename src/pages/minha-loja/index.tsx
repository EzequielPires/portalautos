import Head from "next/head";
import { MenuAside } from "../../components/MenuAside";
import { Navbar } from "../../components/Navbar";
import styles from "./styles.module.scss";

export default function MinhaLoja() {
    return (
        <div className={styles.minha_loja}>
            <Head>
                <title>Minha loja</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <header className="d-flex">
                <Navbar />
                <MenuAside />
            </header>
        </div>
    )
}