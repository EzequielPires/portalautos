import Image from "next/image"
import styles from "./styles.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faArrowLeft, faArrowRight, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export function Card({data}) {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                    <img src={data.img} alt="" />
                <div className="d-flex w-100 flex-column">
                    <span className={styles.brand}>{data.brand}</span>
                    <span className={styles.model}>{data.model}</span>
                    <FontAwesomeIcon icon={faArrowRight as IconProp}/>
                </div>
            </div>
        </div>
    )
}