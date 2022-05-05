import styles from "./styles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {FilterContext} from "../../contexts/FilterContext";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export function ButtonMore() {
    const {active, setActive} = useContext(FilterContext);
    return (
        <button className={styles.btn_more} onClick={() => setActive(true)}>
            Ver todos
            <FontAwesomeIcon icon={faChevronRight as IconProp}/>
        </button>
    )
}