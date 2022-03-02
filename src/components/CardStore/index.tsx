import styles from "./styles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export function CardStore({data}) {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div className={styles.banner}>
                    <img src={data.banner} alt="" />
                </div>
                <div className={styles.overflow}></div>
                <div className={styles.avatar}>
                    <div className={styles.content_image}>
                        <img src={data.avatar} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.card_body}>
                <h4>{data.name}</h4>
                <div className="d-flex my-2 gap-2">
                    <div className={styles.item}>
                        <img src="https://classificados.portalcatalao.com.br/veiculos/images/vehicles/0a8d15b43616c3b435e4b7f68b3ef8fd.jpg" alt="" />
                    </div>
                    <div className={styles.item}>
                        <img src="https://classificados.portalcatalao.com.br/veiculos/images/vehicles/6d8a53448c98cc3f5d5f4ec11600e965.jpg" alt="" />
                    </div>
                    <div className={styles.item}>
                        <img src="https://classificados.portalcatalao.com.br/veiculos/images/vehicles/8fc8badd0e4d8c693548540a21cc67dd.jpg" alt="" />
                    </div>
                    <div className={styles.item}>
                        <img src="https://classificados.portalcatalao.com.br/veiculos/images/vehicles/43d6872203476aee4b2d0df56be9a251.jpg" alt="" />
                    </div>
                </div>
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <span className="d-flex align-items-center gap-1"><FontAwesomeIcon icon={faMapMarkerAlt as IconProp}/>Catalão - GO</span>
                    <FontAwesomeIcon icon={faArrowRight as IconProp}/>
                </div>
            </div>
        </div>
    )
}