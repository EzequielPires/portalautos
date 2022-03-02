import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import { NavbarSecondary } from "../../../components/NavbarSecondary";
import { StepFour } from "../../../components/StepsCar/StepFour";
import { StepOne } from "../../../components/StepsCar/StepOne";
import { StepThree } from "../../../components/StepsCar/StepThree";
import { StepTwo } from "../../../components/StepsCar/StepTwo";
import { CarContext } from "../../../contexts/CarContext";

import styles from "./styles.module.scss";
import Head from "next/head";

export default function Carro() {
    const {setStep, clearCar} = useContext(CarContext);
    
    useEffect(() => {
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