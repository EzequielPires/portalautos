import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import router from "next/router";

import styles from "./styles.module.scss";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type LinkType = {
    text: string,
    ico?: any,
    link?: string
}

export function ButtonSecondary({text, ico, link}: LinkType) {
    return (
        <button className={styles.button} onClick={() => {
            link ? router.push(link) : null;
        }}>
            {ico ? <FontAwesomeIcon icon={ico as IconProp}/> : null}
            {text}
        </button>
    )
}