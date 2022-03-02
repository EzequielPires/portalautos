import { useContext, useEffect, useState } from "react";
import { MotorcycleContext } from "../../../../contexts/MotorcycleContext";
import styles from "./styles.module.scss";
import { TabContent } from "./TabContent";

export function NavTabs() {
    const [active, setActive] = useState('characteristics');
    const { listOptionals, listCharacteristics, getCharacteristics, getOptionals, getSafety, listSafety, step } = useContext(MotorcycleContext);
    useEffect(() => {
        if(step === 5 && listOptionals.length === 0) {
            getOptionals().then(() => {
                getCharacteristics().then(() => {
                    getSafety();
                });
            });
        }
    }, []);
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
                <TabContent list={listOptionals} type={active}/> 
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