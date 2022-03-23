import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import { MenuAside } from "../../components/MenuAside";
import { Navbar } from "../../components/Navbar";
import { NavTabs } from "../../components/NavTabs";
import { CarContext } from "../../contexts/CarContext";

import styles from "./styles.module.scss";

export default function MeusAnuncios() {
    const {clearCar} = useContext(CarContext);
    useEffect(() => {
        clearCar();
    }, []);
    return (
        <div className={styles.meus_anuncios}>
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
                <NavTabs />
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['nextauth.token']: token } = parseCookies(ctx);
    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }
    return {
        props: {
        }
    }
}