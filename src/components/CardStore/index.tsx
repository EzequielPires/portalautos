import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Bg from "../../assets/bg.png";
import { useFetchDefault } from "../../hooks/useFetchDefault";
import { useEffect, useState } from "react";
import Link from "next/link";

export function CardStore({ data }) {
    const { fetch } = useFetchDefault();
    const [vehicles, setVehicles] = useState([]);

    const handleVehicles = async () => {
        const res = await fetch(`store/${data.id}/vehicles`);
        setVehicles(res.data.result.vehicles);
    }

    useEffect(() => {
        handleVehicles();
    }, []);

    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div className={styles.banner}>
                    {data.banner ? <img src={"https://portalautos.com.br/" + data.banner.path} alt="" /> : <img src={Bg.src} alt="" />}
                </div>
                {data.banner && <div className={styles.overflow}></div>}
                <div className={styles.avatar}>
                    <div className={styles.content_image}>
                        {data.logo ? <img src={"https://portalautos.com.br/" + data.logo.path} alt="" /> : <h2 className="m-0" style={{ color: "#fff" }}>{data.name.substring(0, 1).toUpperCase()}</h2>}
                    </div>
                </div>
            </div>
            <div className={styles.card_body}>
                <h4>{data.name.toUpperCase()}</h4>
                <div className="d-flex my-2 gap-2">
                    {vehicles.length > 0 ? vehicles.map(item => (
                        <Link key={item.id} href={`/comprar/${item.version.model.brand.id_string}/${item.version.model.id_string}/${item.version.id_string}/${item.identifier}`}>
                            <a className={styles.item}>
                                <img src={`https://portalautos.com.br/${item.gallery.images[0].path}`} alt="" style={{ width: 54, height: 54 }} />
                            </a>
                        </Link>
                    )) : null}
                </div>
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <span className="d-flex align-items-center gap-1"><FontAwesomeIcon icon={faMapMarkerAlt as IconProp} />Catalão - GO</span>
                    <FontAwesomeIcon icon={faArrowRight as IconProp} />
                </div>
            </div>
        </div>
    )
}