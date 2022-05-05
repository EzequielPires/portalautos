import styles from './styles.module.scss';
import { NavbarFixed } from "../../components/NavbarFixed";
import { Filter } from "../../components/Filter";
import { CardAnnouncement } from "../../components/CardAnnouncement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useContext, useEffect } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SkeletonCardAnnouncement } from "../../components/Skeleton/SkeletonCardAnnouncement";
import { useRouter } from 'next/router';

export default function Search() {
    const { brand, activeFilter, setActiveFilter, filter, run, more } = useContext(FilterContext);
    const router = useRouter();
    const id = router.query.id || [];
    const teste = useCallback(() => {
        if (id && id.length > 0) {
            const { filter: link } = router.query;
            run(id, link);
        }
    }, [id]);
    useEffect(() => {
        teste();
    }, [id]);
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
                        <h2>Exibindo resultados</h2>
                        <span>{filter.total.value} carros encontrados</span>
                    </div>
                    <div className={styles.list + " d-flex flex-wrap justify-content-start px-4 gap-4"}>
                        {filter.vehicles.value && filter.vehicles.value.length > 0 ? filter.vehicles.value.map((vehicle, idx) => (<CardAnnouncement key={idx} data={vehicle} />))
                            : null
                        }
                        {filter.vehicleGet.isLoading ?
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
                            </> :
                            <>
                                {(filter.vehicles.value.length % 20) === 0 && filter.vehicles.value.length >= 20 ?
                                    <div className="d-flex justify-content-center w-100">
                                        <button className={styles.button_more} onClick={() => {
                                            if (id && id.length > 0) {
                                                const { filter: link } = router.query;
                                                more(id, link, filter.vehicles.value.length / 20 + 1);
                                            }
                                        }}>
                                            Ver mais
                                        </button>
                                    </div>
                                    : null}
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}