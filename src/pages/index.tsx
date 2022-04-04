import {NavbarFixed} from "../components/NavbarFixed";
import {SectionFormFilterHome} from "../components/SectionFormFilterHome";
import {SectionOffers} from "../components/SectionOffers";
import {SectionVehiclesPopular} from "../components/SectionVehiclesPopular";
import {SectionCategoryCar} from "../components/SectionCategoryCar";
import {SectionStore} from "../components/SectionStore";
import {Footer} from "../components/Footer";
import { SectionServices } from "../components/SectionServices";
import {Filter} from "../components/Filter";
import { useEffect } from "react";
import Router from "next/router";

export default function Home() {
  useEffect(() => {
    Router.push('/login')
  }, []);

  return (
    <div>
        {/* <NavbarFixed />
        <Filter />
        <SectionFormFilterHome />
        <SectionServices />
        <SectionOffers />
        <SectionVehiclesPopular />
        <SectionStore />
        <SectionCategoryCar />
        <Footer /> */}
    </div>
  )
}
