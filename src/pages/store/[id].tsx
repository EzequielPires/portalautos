import styles from "./styles.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarFixed } from "../../components/NavbarFixed";
import BannerGiovanni from "../../assets/giovanni-banner.png";
import LogoGiovanni from "../../assets/giovanni-logo.svg";
import { useContext, useEffect, useState } from "react";
import { faArrowRight, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { CardAnnouncement } from "../../components/CardAnnouncement";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import { useFetchDefault } from "../../hooks/useFetchDefault";
import { FaImage } from "react-icons/fa";

export default function Store() {
    const { fetch } = useFetchDefault();
    const [store, setStory] = useState(null);
    const [vehicles, setVehicles] = useState(null);
    const router = useRouter();
    const { id } = router.query;
    const handleStore = async () => {
        const res: any = await fetch(`/store/${id}/view`).then(res => {
            handleVehicles();
            return res;
        });;
        setStory(res.data);
    }
    const handleVehicles = async () => {
        const res = await fetch(`store/${id}/vehicles`)
        console.log(res);
        setVehicles(res.data.result.vehicles);
    }

    useEffect(() => {
        id ? handleStore() : null;
    }, [id]);
    if (!store) {
        return <div></div>
    }
    return (
        <div className={styles.store}>
            <NavbarFixed />
            <div className={styles.banner}>
                {store.banner ? <img src={`https://portalautos.com.br/${store.banner.path}`} alt="" /> : <FaImage style={{ color: '#fff' }} />}
            </div>
            <div className={styles.content}>
                <nav className={styles.aside_bar}>
                    <div className={styles.avatar}>
                        {store.logo ? <img src={`https://portalautos.com.br/${store.logo.path}`} alt="" /> : <FaImage style={{ color: '#fff' }} />}
                    </div>
                    <h4 className={styles.name}>{store.name}</h4>
                    <div className={styles.address + " d-flex align-items-center gap-2"}>
                        <FontAwesomeIcon icon={faMapMarkerAlt as IconProp} />
                        <span>Catalão - GO</span>
                    </div>
                    <p className="mt-3">{store.wpp_number}</p>
                    <p>{store.phone_number}</p>
                    <p>{store.email}</p>
                    <hr />
                </nav>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between px-4 mt-4">
                        <p className={styles.text_results}><span>10 veículos</span> em estoque</p>
                        <Link href="/">
                            <a className={styles.filter_results + " d-flex align-items-center gap-2"}>
                                <span>Filtrar resultados</span><FontAwesomeIcon icon={faArrowRight as IconProp} />
                            </a>
                        </Link>

                    </div>
                    <div className={styles.list + " d-flex flex-wrap justify-content-center gap-4"}>
                        {vehicles?.map((vehicle, idx) => (
                            <CardAnnouncement key={idx} data={vehicle} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}