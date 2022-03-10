import styles from "./styles.module.scss";
import {TabType} from "./TabType";
import {BrandVehicle} from "./BrandVehicle";
import {PriceRange} from "./PriceRange";
import {YearVehicle} from "./YearVehicle";
import {MileageRange} from "./MileageRange";
import {StateVehicle} from "./StateVehicle";
import {ColorsVehicle} from "./ColorsVehicle";
import {OptionalsVehicle} from "./OptionalsVehicle";
import {GearshiftVehicle} from "./GearshiftVehicle";
import {PlateVehicle} from "./PlateVehicle";
import {BodyworkVehicle} from "./BodyworkVehicle";
import {CharacteristicsVehicle} from "./CharacteristicsVehicle";
import {ContentMore} from "./ContentMore";
import {FuelVehicle} from "./FuelVehicle";
import {useContext, useEffect} from "react";
import {FilterContext} from "../../contexts/FilterContext";

type Filter = {
    show?: boolean;
}

export function Filter({show = false}) {
    const {activeFilter, setActiveFilter} = useContext(FilterContext);
    useEffect(() => {
        setActiveFilter(show);
    }, [])
    return (
        <nav className={styles.filter + ` ${activeFilter && styles.active_filter}`}>
            <div className={styles.content}>
                <div className="d-flex justify-content-center d-md-none pt-3">
                    <span style={{color: '#333', fontWeight: 600, fontSize: 16}}>FILTRAR</span>
                </div>
                <TabType/>
                <BrandVehicle/>
                <hr/>
                <PriceRange/>
                <hr/>
                <YearVehicle/>
                <hr/>
                <MileageRange/>
                <hr/>
                <StateVehicle/>
                <hr/>
                <ColorsVehicle/>
                <hr/>
                <OptionalsVehicle/>
                <hr/>
                <GearshiftVehicle/>
                <hr/>
                <FuelVehicle/>
                <hr/>
                <PlateVehicle/>
                <hr/>
                <BodyworkVehicle/>
                <hr/>
                <CharacteristicsVehicle/>
                <hr/>
            </div>
            <div className={styles.btn_filter + " d-flex justify-content-center d-md-none"}>
                <button onClick={() => setActiveFilter(!activeFilter)}>FILTRAR</button>
            </div>
            <ContentMore />
        </nav>
    )
}