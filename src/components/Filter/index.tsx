import styles from "./styles.module.scss";
import { TabType } from "./TabType";
import { BrandVehicle } from "./BrandVehicle";
import { PriceRange } from "./PriceRange";
import { YearVehicle } from "./YearVehicle";
import { MileageRange } from "./MileageRange";
import { StateVehicle } from "./StateVehicle";
import { ColorsVehicle } from "./ColorsVehicle";
import { OptionalsVehicle } from "./OptionalsVehicle";
import { GearshiftVehicle } from "./GearshiftVehicle";
import { PlateVehicle } from "./PlateVehicle";
import { BodyworkVehicle } from "./BodyworkVehicle";
import { CharacteristicsVehicle } from "./CharacteristicsVehicle";
import { ContentMore } from "./ContentMore";
import { FuelVehicle } from "./FuelVehicle";
import { useContext, useEffect } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { useRouter } from "next/router";

type Filter = {
    show?: boolean;
}

export function Filter({ show = false }) {
    const { activeFilter, setActiveFilter, filter } = useContext(FilterContext);
    const router = useRouter();
    const path = router.asPath;
    useEffect(() => {
        setActiveFilter(show);
    }, [])
    return (
        <nav className={styles.filter + ` ${activeFilter && styles.active_filter} ${path === "/" ? "d-md-none" : null}`}>
            <div className={styles.content}>
                <div className="d-flex justify-content-center d-md-none pt-3">
                    <span style={{ color: '#333', fontWeight: 600, fontSize: 16 }}>FILTRAR</span>
                </div>
                <TabType />
                <BrandVehicle />
                <hr />
                <PriceRange />
                <hr />
                {/* <YearVehicle />
                <hr /> */}
                <MileageRange />
                <hr />
                <StateVehicle />
                <hr />
                <ColorsVehicle />
                <hr />
                {<OptionalsVehicle />}
                <hr />
                {filter.gearshifts.options.length > 0 ?
                    <>
                        <GearshiftVehicle />
                        <hr />
                    </>
                    : null}
                {filter.fuels.options.length > 0 ?
                    <>
                        <FuelVehicle />
                        <hr />
                    </>
                    : null}
                <PlateVehicle />
                <hr />
                {filter.categories.options.length > 0 ?
                    <>
                        <BodyworkVehicle />
                        <hr />
                    </>
                    : null}
                {filter.characteristics.options.length > 0 ?
                    <>
                        <CharacteristicsVehicle />
                        <hr />
                    </>
                    : null}
            </div>
            <div className={styles.btn_filter + " d-flex justify-content-center d-md-none"}>
                <button onClick={() => setActiveFilter(!activeFilter)}>FILTRAR</button>
            </div>
            <ContentMore options={null} title={null} type={null} />
        </nav>
    )
}