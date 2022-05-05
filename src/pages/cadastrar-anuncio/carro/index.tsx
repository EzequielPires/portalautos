import router from "next/router";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import { NavbarSecondary } from "../../../components/NavbarSecondary";
import { StepOne } from "../../../components/StepsCar/StepOne"
import { StepTwo } from "../../../components/StepsCar/StepTwo";
import { CarContext } from "../../../contexts/CarContext";
import { StoreRepository } from "../../../repositories/StoreRepository";

import styles from "./styles.module.scss";

export default function Carro() {
    const {setStep, clearCar} = useContext(CarContext);
    const storeRepository = new StoreRepository();
    const handleStore = async () => {
        try {
            const res = await storeRepository.view();
            {!res.success ? router.push('/minha-loja?origin=/cadastrar-anuncio/carro') : null}
        } catch {
            return false;
        }
    }
    useEffect(() => {
        handleStore();
        clearCar();
        setStep(1);
    }, [])
    return (
        <div className={styles.cadastrar_anuncio}>
            <Head>
                <title>Cadastrar anúncio - Carro</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <header className="d-flex flex-column">
                <NavbarSecondary title="CADASTRO DE VEICULO"/>
            </header>
            <div className={styles.content}>
                <StepOne />
                <div className="mt-4"></div>
                <StepTwo />
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