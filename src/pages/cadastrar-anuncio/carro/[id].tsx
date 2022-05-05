import { GetServerSideProps } from "next";
import Router, { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import { Loading } from "../../../components/Loading";
import { NavbarSecondary } from "../../../components/NavbarSecondary";
import { StepFive } from "../../../components/StepsCar/StepFive";
import { StepFour } from "../../../components/StepsCar/StepFour";
import { StepOne } from "../../../components/StepsCar/StepOne";
import { StepThree } from "../../../components/StepsCar/StepThree";
import { StepTwo } from "../../../components/StepsCar/StepTwo";
import { CarContext } from "../../../contexts/CarContext";
import { GalleryContext } from "../../../contexts/GalleryContext";
import { useFetch } from "../../../hooks/useFetch";

import styles from "./styles.module.scss";
import Head from "next/head";
import { AlertContext } from "../../../contexts/AlertContext";

export default function Carro() {
    const { setStep, clearCar, editVehicle, buildVehicle, getDetail } = useContext(CarContext);
    const { alertShow } = useContext(AlertContext);
    const { setGallery } = useContext(GalleryContext);
    const newRouter = useRouter();
    const { id } = newRouter.query;
    const { data, isLoading, error } = useFetch(`/vehicle/${id}/view`);
    useEffect(() => {
        setStep(3);
        clearCar();
        getDetail();
    }, []);
    useEffect(() => {
        if (id && data) {
            buildVehicle(data.data);
            data.data.gallery ? setGallery(data.data.gallery.images ?? []) : setGallery([]);
        }
    }, [id, data]);

    if(error) {
        alertShow("danger", "Erro ao abrir o anúncio, tente novamente.");
        Router.push('/meus-anuncios');
    }

    return (
        <div className={styles.cadastrar_anuncio}>
            <Head>
                <title>Cadastrar anúncio - Carro</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <header className="d-flex flex-column">
                <NavbarSecondary title="CADASTRO DE VEICULO" />
            </header>
            {isLoading ? <Loading /> : null}
            <div className={styles.content}>
                <StepOne />
                <div className="mt-4"></div>
                <StepTwo />
                <div className="mt-4"></div>
                <StepThree />
                <div className="mt-4"></div>
                <StepFour />
                <div className="mt-4"></div>
                <StepFive />
                <div className="mt-4"></div>
                <button className={styles.btn_finaly} onClick={(e) => {
                    editVehicle(e, id).then(() => newRouter.push('/meus-anuncios'));
                }}>Finalizar anúncio  </button>
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