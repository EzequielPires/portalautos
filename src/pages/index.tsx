import {NavbarFixed} from "../components/NavbarFixed";
import {SectionFormFilterHome} from "../components/SectionFormFilterHome";
import {SectionOffers} from "../components/SectionOffers";
import {SectionVehiclesPopular} from "../components/SectionVehiclesPopular";
import {SectionCategoryCar} from "../components/SectionCategoryCar";
import {SectionStore} from "../components/SectionStore";
import {Footer} from "../components/Footer";
import { SectionServices } from "../components/SectionServices";
import {Filter} from "../components/Filter";

export default function Home() {
  return (
    <div>
        <NavbarFixed />
        <Filter />
        <SectionFormFilterHome />
        <SectionServices />
        <SectionOffers />
        <SectionVehiclesPopular />
        <SectionOffers />
        <div className="mt-5"></div>
        <SectionStore />
        <SectionCategoryCar />
        <Footer />
    </div>
  )
}
