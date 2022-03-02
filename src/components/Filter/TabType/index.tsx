import styles from "./styles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {faCarSide, faMotorcycle} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export function TabType() {
    const [type, setType] = useState('car');
    return (
        <div className={styles.tab_type}>
            <button
                className={type === 'car' ? styles.active : null}
                onClick={() => setType('car')}
            >
                <FontAwesomeIcon icon={faCarSide as IconProp}/>
                Carros
            </button>
            <button
                className={type === 'motorcycle' ? styles.active : null}
                onClick={() => setType('motorcycle')}
            >
                <FontAwesomeIcon icon={faMotorcycle as IconProp}/>
                Motos
            </button>
        </div>
    )
}