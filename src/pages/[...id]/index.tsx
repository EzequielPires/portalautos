import styles from './styles.module.scss';
import { NavbarFixed } from "../../components/NavbarFixed";
import { Filter } from "../../components/Filter";
import { CardAnnouncement } from "../../components/CardAnnouncement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SkeletonCardAnnouncement } from "../../components/Skeleton/SkeletonCardAnnouncement";
import { useFetch } from "../../hooks/useFetch";

export default function Search() {
    const { data } = useFetch('/ad/filter?type=car&limit=100');
    const { brand, activeFilter, setActiveFilter } = useContext(FilterContext);
    useEffect(() => {
        data ? console.log(data.data.result.vehicles) : null;
    }, [data]);
    return (
        <div className={styles.search + ` ${activeFilter && styles.active_filter}`}>
            <NavbarFixed />
            <div className={styles.content}>
                <Filter />
                <div className="d-flex flex-column w-100">
                    <nav className={styles.nav_filter}>
                        <button className={styles.btn_filter} onClick={() => setActiveFilter(!activeFilter)}>
                            <FontAwesomeIcon icon={faSlidersH as IconProp} />
                        </button>
                        <div className="d-flex gap-2">
                            <button className={styles.item}>
                                Brasil
                                <FontAwesomeIcon icon={faMinusCircle as IconProp} />
                            </button>
                            {brand ?
                                <button className={styles.item}>
                                    {brand.name}
                                    <FontAwesomeIcon icon={faMinusCircle as IconProp} />
                                </button> : null}
                        </div>
                    </nav>
                    <div className={styles.title}>
                        {brand ? <h2>{brand.name}</h2> : <h2>Exibindo resultados</h2>}
                        <span>3.659 carros encontrados</span>
                    </div>
                    <div className={styles.list + " d-flex flex-wrap justify-content-center gap-4"}>
                        {data && data.data.result.vehicles ? data.data.result.vehicles.map((vehicle, idx) => (<CardAnnouncement data={vehicle} />))
                            :
                            <>
                                <SkeletonCardAnnouncement />
                                <SkeletonCardAnnouncement />
                                <SkeletonCardAnnouncement />
                                <SkeletonCardAnnouncement />
                                <SkeletonCardAnnouncement />
                                <SkeletonCardAnnouncement />
                                <SkeletonCardAnnouncement />
                                <SkeletonCardAnnouncement />
                                <SkeletonCardAnnouncement />
                                <SkeletonCardAnnouncement />
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}