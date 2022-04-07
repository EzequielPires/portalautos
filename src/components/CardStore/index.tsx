import styles from "./styles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";

export function CardStore({data}) {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div className={styles.banner}>
                    {data.banner && <img src={data.banner} alt="" />}
                </div>
                {data.banner && <div className={styles.overflow}></div>}
                <div className={styles.avatar}>
                    <div className={styles.content_image}>
                        {data.logo ? <img src={data.logo} alt="" /> : <h2 className="m-0" style={{color: "#fff"}}>{data.name.substring(0, 1)}</h2>}
                    </div>
                </div>
            </div>
            <div className={styles.card_body}>
                <h4>{data.name}</h4>
                <div className="d-flex my-2 gap-2">
                    <div className={styles.item}>
                        <img src="https://portalautos.com.br/images/vehicles/091094bffd45a8a854b1fc2292192f1a.webp" alt="" style={{width: 54, height: 54}} />
                    </div>
                    <div className={styles.item}>
                        <img src="https://portalautos.com.br/images/vehicles/091094bffd45a8a854b1fc2292192f1a.webp" alt="" style={{width: 54, height: 54}} />
                    </div>
                    <div className={styles.item}>
                        <img src="https://portalautos.com.br/images/vehicles/091094bffd45a8a854b1fc2292192f1a.webp" alt="" style={{width: 54, height: 54}} />
                    </div>
                    <div className={styles.item}>
                        <img src="https://portalautos.com.br/images/vehicles/091094bffd45a8a854b1fc2292192f1a.webp" alt="" style={{width: 54, height: 54}} />
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