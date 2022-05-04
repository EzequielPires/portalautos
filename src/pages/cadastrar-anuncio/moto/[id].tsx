import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import { NavbarSecondary } from "../../../components/NavbarSecondary";
import { StepFive } from "../../../components/StepsMotorcycle/StepFive";
import { StepFour } from "../../../components/StepsMotorcycle/StepFour";
import { StepOne } from "../../../components/StepsMotorcycle/StepOne";
import { StepThree } from "../../../components/StepsMotorcycle/StepThree";
import { StepTwo } from "../../../components/StepsMotorcycle/StepTwo";
import { CarContext } from "../../../contexts/CarContext";
import { MotorcycleContext } from "../../../contexts/MotorcycleContext";

import styles from "./styles.module.scss";
import {useFetch} from "../../../hooks/useFetch";
import {GalleryContext} from "../../../contexts/GalleryContext";
import {Loading} from "../../../components/Loading";
import Head from "next/head";

export default function Moto() {
    const { setStep, clearMotorcycle, editVehicle, buildVehicle, getDetail } = useContext(MotorcycleContext);
    const { setGallery } = useContext(GalleryContext);
    const newRouter = useRouter();
    const { id } = newRouter.query;
    const { data, isLoading } = useFetch(`/vehicle/${id}/view`);
    useEffect(() => {
        setStep(3);
        clearMotorcycle();
        getDetail();
    }, []);
    useEffect(() => {
        if (id && data) {
            buildVehicle(data.data);
            data.data.gallery ? setGallery(data.data.gallery.images ?? []) : setGallery([]);
        }
    }, [id, data])
    return (
        <div className={styles.cadastrar_anuncio}>
            <Head>
                <title>Cadastrar anúncio - Moto</title>
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