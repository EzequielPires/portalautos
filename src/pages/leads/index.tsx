import styles from "./styles.module.scss";
import Head from "next/head";
import { MenuAside } from "../../components/MenuAside";
import { Navbar } from "../../components/Navbar";

export default function Leads() {
    return (
        <div>
            <Head>
                <title>Meus anúncios</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <header className="d-flex">
                <Navbar />
                <MenuAside />
            </header>
            <div className={styles.content}>

            </div>
        </div>
    )
}