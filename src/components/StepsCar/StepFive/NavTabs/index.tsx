import { useContext, useEffect, useState } from "react";
import { CarContext } from "../../../../contexts/CarContext";
import { CheckOptional } from "../../../Form/CheckOptional";
import styles from "./styles.module.scss";
import { TabContent } from "./TabContent";

export function NavTabs() {
    const [active, setActive] = useState('characteristics');
    const { listOptional, listCharacteristics, getCharacteristics, listOptionalVehicle, getSafety, listSafety, step } = useContext(CarContext);
    useEffect(() => {
        if(step === 5 && listOptional.length === 0) {
            listOptionalVehicle().then(() => {
                getCharacteristics().then(() => {
                    getSafety();
                });
            });
        }
    }, [step]);
    return (
        <div className={styles.navtabs}>
            <nav className={styles.header}>
                <button className={active === 'characteristics' ? styles.active : null} onClick={() => {
                    setActive('characteristics');
                }}>Características</button>
                <button className={active === 'optional' ? styles.active : null} onClick={() => {
                    setActive('optional');
                }}>Opcionais</button>
                <button className={active === 'safety' ? styles.active : null} onClick={() => {
                    setActive('safety');
                }}>Segurança</button>
            </nav>
            <hr />
            {active === 'optional' ?
                <TabContent list={listOptional} type={active}/> 
            : null}
            {active === 'characteristics' ?
                <TabContent list={listCharacteristics} type={active}/> 
            : null}
            {active === 'safety' ?
                <TabContent list={listSafety} type={active}/> 
            : null}
        </div>
    );
}