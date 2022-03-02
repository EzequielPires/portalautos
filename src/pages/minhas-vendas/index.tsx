import { TabContent } from "../../components/NavTabs/TabContent";
import { Navbar } from "../../components/Navbar";
import { MenuAside } from "../../components/MenuAside";

import styles from "./styles.module.scss";
import Head from "next/head";

export default function MinhasVendas() {
    return (
        <div className={styles.minhas_vendas}>
            <Head>
                <title>Minhas vendas</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <header className="d-flex">
                <Navbar />
                <MenuAside />
            </header>
            <div className={styles.content}>
                <TabContent link="/admin/vehicle/list?limit=12&sold=1" active="Vendidos"/>
            </div>
        </div>
    )
}
