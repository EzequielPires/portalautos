import styles from "./styles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useContext, useState} from "react";
import {faCarSide, faMotorcycle} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import router from "next/router";
import {FilterContext} from "../../../contexts/FilterContext";

export function TabType() {
    const {filter} = useContext(FilterContext);
    const [type, setType] = useState('car');
    return (
        <div className={styles.tab_type}>
            <button
                className={filter.type.value === 'car' ? styles.active : null}
                onClick={() => {
                    router.push('/carros');
                    setType('car')
                }}
            >
                <FontAwesomeIcon icon={faCarSide as IconProp}/>
                Carros
            </button>
            <button
                className={filter.type.value === 'motorcycle' ? styles.active : null}
                onClick={() => {
                    router.push('/motos');
                    setType('motorcycle')
                }}
            >
                <FontAwesomeIcon icon={faMotorcycle as IconProp}/>
                Motos
            </button>
        </div>
    )
}