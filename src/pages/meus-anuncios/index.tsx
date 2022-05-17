import {useContext, useEffect} from "react";
import {GetServerSideProps} from "next";
import Head from "next/head";
import {parseCookies} from "nookies";

import {MenuAside} from "../../components/MenuAside";
import {NavbarFixed} from "../../components/NavbarFixed";
import {NavTabs} from "../../components/NavTabs";
import {ModalAction} from "../../components/ModalAction";

import {FilterDashboardProvider} from "../../contexts/FilterDashboardContext";

import {CarContext} from "../../contexts/CarContext";
import {MotorcycleContext} from "../../contexts/MotorcycleContext";

import styles from "./styles.module.scss";

export default function MeusAnuncios() {
    const {clearCar} = useContext(CarContext);
    const {clearMotorcycle} = useContext(MotorcycleContext);
    useEffect(() => {
        clearCar();
        clearMotorcycle();
    }, []);
    return (
        <FilterDashboardProvider>
            <div className={styles.meus_anuncios}>
                <Head>
                    <title>Meus anúncios</title>
                    <meta name="robots" content="noindex"/>
                    <meta name="author" content="Portal Catalão Internet Service"/>
                </Head>
                <header className="d-flex">
                    <NavbarFixed/>
                    <MenuAside/>
                </header>
                <div className={styles.content}>
                    <NavTabs/>
                </div>
            </div>
            <ModalAction />
        </FilterDashboardProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {['nextauth.token']: token} = parseCookies(ctx);
    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}