import Link from "next/link";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import styles from "./styles.module.scss";
import NoImage from "../../assets/no-image.svg";
import { FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
import { CarouselCard } from "../CarouselCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function CardAnnouncement({ data }) {
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            { id.length > 0 && id[0] === 'carros' || id[0] === 'motos' ? setIsMobile(true) : null }
        }
    }, [id]);
    return (
        <Link href={`/comprar/${data.version.model.brand.id_string}/${data.version.model.id_string}/${data.version.id_string}/${data.identifier}`}>
            <div className={styles.card + ` ${isMobile ? styles.search : null}`}>
                <div className={styles.card_header}>
                    {data.gallery && data.gallery.images.length > 0
                        ? <CarouselCard array={data.gallery.images} /> : <img src={NoImage.src} alt="" />}
                    {data.new ? <span className={styles.new}><span>0Km</span></span> : null}
                </div>
                <div className={styles.card_body}>
                    <header className="d-flex flex-column">
                        <h4 className={styles.title}>{data.version.model.brand.name} <span>{data.version.model.name}</span></h4>
                        <h5 className={styles.subtitle}>{data.version.name}</h5>

                        <h5 className={styles.price}><span>R$</span> {VMasker.toMoney(data.price)}</h5>
                    </header>
                    <footer>
                        <div className="d-flex justify-content-between px-2 px-md-3">
                            <span>{data.year_manufacture}/{data.year_model}</span>
                            <span>{data.mileage_traveled}Km</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between px-2 px-md-3">
                            <span className="d-flex align-items-center gap-1"><FaMapMarkerAlt />Catalão - GO</span>
                            <button className={styles.btn_favorites}><FaRegHeart /></button>
                        </div>
                    </footer>
                </div>
            </div>
        </Link>
    )
}