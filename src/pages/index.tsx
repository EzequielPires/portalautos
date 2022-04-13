import { NavbarFixed } from "../components/NavbarFixed";
import { SectionFormFilterHome } from "../components/SectionFormFilterHome";
import { SectionOffers } from "../components/SectionOffers";
import { SectionVehiclesPopular } from "../components/SectionVehiclesPopular";
import { SectionCategoryCar } from "../components/SectionCategoryCar";
import { SectionStore } from "../components/SectionStore";
import { Footer } from "../components/Footer";
import { SectionServices } from "../components/SectionServices";
import { Filter } from "../components/Filter";
import ImgDefault from "../assets/image-default.png";
import { useEffect } from "react";
import Router from "next/router";
import Head from "next/head";

export default function Home() {
  /* useEffect(() => {
    Router.push('/login')
  }, []); */

  return (
    <div className="d-flex flex-column w-100">
      <Head>
        <title>PortalAutos - Compre, venda e financie carros usados, novos e motos.</title>
        <meta name="description" content="Se você está procurando o carro ou moto perfeito para a sua vida e não quer pagar rios de dinheiro por isso, nós podemos te ajudar! O PortalAutos oferece a você uma forma de encontrar o seu veículo ideal de forma rápida, fácil e segura." />
        <meta property="og:image" content={`https://portalcatalao.com.br/${ImgDefault.src}`} />
      </Head>
      <NavbarFixed />
      {/* <Filter />
      <SectionFormFilterHome /> */}
      {/* <SectionServices /> */}
      <SectionOffers />
      <SectionVehiclesPopular />
      <SectionStore />
      <SectionCategoryCar />
      <Footer />
    </div>
  )
}
