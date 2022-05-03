import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarFixed } from "../../components/NavbarFixed";
import { useEffect, useState } from "react";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { CardAnnouncement } from "../../components/CardAnnouncement";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import { useFetchDefault } from "../../hooks/useFetchDefault";
import Bg from "../../assets/bg.svg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Store() {
    const { fetch } = useFetchDefault();
    const [store, setStory] = useState(null);
    const [vehicles, setVehicles] = useState(null);
    const [total, setTotal] = useState(0);
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
        const res = await fetch(`store/${id}/vehicles?total=1`);
        setVehicles(res.data.result.vehicles);
        setTotal(res.data.result.total);
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
                {store.banner ? <img src={`https://portalautos.com.br/${store.banner.path}`} alt="" /> : <img src={Bg.src} alt="" />}
            </div>
            <div className={styles.content}>
                <nav className={styles.aside_bar}>
                    <div className={styles.avatar}>
                        {store.logo ? <img src={`https://portalautos.com.br/${store.logo.path}`} alt="" /> : <h2 className="m-0" style={{ color: "#fff" }}>{store.name.substring(0, 1).toUpperCase()}</h2>}
                    </div>
                    <h4 className={styles.name}>{store.name}</h4>
                    <div className={styles.address + " d-flex align-items-center gap-2"}>
                        <FontAwesomeIcon icon={faMapMarkerAlt as IconProp} />
                        <span>Catalão - GO</span>
                    </div>
                    <Link href="/">
                        <a className={styles.btn_wpp}>Iniciar conversa</a>
                    </Link>
                    <hr />
                </nav>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between px-4 mt-4">
                        <p className={styles.text_results}><span>{total} veículos</span> em estoque</p>
                        <Link href="/">
                            <a className={styles.filter_results + " d-flex align-items-center gap-2"}>
                                <span>Filtrar resultados</span><FaArrowRight />
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