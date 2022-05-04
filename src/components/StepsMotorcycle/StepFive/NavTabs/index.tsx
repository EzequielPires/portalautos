import { useContext, useEffect, useState } from "react";
import { CarContext } from "../../../../contexts/CarContext";
import { MotorcycleContext } from "../../../../contexts/MotorcycleContext";
import { CheckOptional } from "../../../Form/CheckOptional";
import styles from "./styles.module.scss";
import { TabContent } from "./TabContent";

export function NavTabs() {
    const [active, setActive] = useState('characteristics');
    const { motorcycle } = useContext(MotorcycleContext);
    return (
        <div className={styles.navtabs}>
            <nav className={styles.header}>
                <button className={active === 'characteristics' ? styles.active : null} onClick={() => {
                    setActive('characteristics');
                }}>Características</button>
                <button className={active === 'comfort' ? styles.active : null} onClick={() => {
                    setActive('comfort');
                }}>Conforto</button>
                <button className={active === 'optional' ? styles.active : null} onClick={() => {
                    setActive('optional');
                }}>Opcionais</button>
                <button className={active === 'safety' ? styles.active : null} onClick={() => {
                    setActive('safety');
                }}>Segurança</button>
            </nav>
            <hr />
            {active === 'optional' ?
                <TabContent list={motorcycle.optional.options} type={active}/> 
            : null}
            {active === 'characteristics' ?
                <TabContent list={motorcycle.characteristic.options} type={active}/> 
            : null}
            {active === 'safety' ?
                <TabContent list={motorcycle.safety.options} type={active}/> 
            : null}
            {active === 'comfort' ?
                <TabContent list={motorcycle.confort.options} type={active}/> 
            : null}
        </div>
    );
}