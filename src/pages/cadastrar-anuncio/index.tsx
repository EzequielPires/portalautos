import { ButtonSecondary } from "../../components/ButtonSecondary";
import { NavbarSecondary } from "../../components/NavbarSecondary";
import Car from "../../assets/car.svg";
import Motorcycle from "../../assets/motorcycle.svg"

import styles from "./styles.module.scss";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Head from "next/head";

export default function CadastrarAnuncio() {
    return (
        <div className={styles.cadastrar_anuncio}>
            <Head>
                <title>Cadastrar anúncio</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <header className="d-flex flex-column">
                <NavbarSecondary title="CADASTRO DE VEICULOS"/>
            </header>
            <div className={styles.content}>
                <p>Qual o tipo de veículo você gostaria de anunciar?</p>
                <div className="d-flex w-100 justify-content-center flex-wrap gap-4">
                    <div className={styles.card}>
                        <img src={Car.src} alt="" />
                        <h4>CARROS</h4>
                        <ButtonSecondary text="Anunciar" link="/cadastrar-anuncio/carro" />
                    </div>
                    <div className={styles.card}>
                        <img src={Motorcycle.src} alt="" />
                        <h4>MOTOS</h4>
                        <ButtonSecondary text="Anunciar" link="/cadastrar-anuncio/moto" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['nextauth.token']: token } = parseCookies(ctx);
    console.log(ctx);
    if (!token) {
        return {
            redirect: {
                destination: `/login`,
                permanent: false,
            }
        }
    }
    return {
        props: {
        }
    }
}