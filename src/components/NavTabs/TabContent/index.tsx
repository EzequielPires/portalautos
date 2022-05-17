import {useContext, useEffect, useState} from 'react';
import { AnnouncementContext } from '../../../contexts/AnnouncementContext';
import { useFetch } from '../../../hooks/useFetch';
import { AlertNotVehicle } from '../../AlertNotVehicle';
import { Loading } from '../../Loading';
import styles from './styles.module.scss';
import { TabCard } from './TabCard';
import {TabSearch} from "./TabSearch";
import {FilterDashboardContext} from "../../../contexts/FilterDashboardContext";
import {useRouter} from "next/router";

export function TabContent({ link, active }) {
    const [loading, setLoading] = useState(false);
    const {vehicles, more} = useContext(FilterDashboardContext);
    const router = useRouter();

    return (
        <>
            {loading ? <Loading /> : null}
            {active === 'Removidos' ?
                <div className={styles.alert + ' w-100 alert alert-danger d-flex align-items-center'}>
                    <span>Anúncios removidos serão apagados permanentemente após 15 dias.</span>
                </div> : null
            }
            {
                active === 'Search' ?
                    <ul className={styles.tab_content + " d-flex flex-wrap gap-4 justify-content-evelyn"}>
                        <TabSearch/>
                    </ul>
                    : <ul className={styles.tab_content + " d-flex flex-wrap gap-2 justify-content-evelyn"}>
                        {vehicles.length > 0 ? vehicles.map(item => (
                            <li key={item.id}>
                                <TabCard content={item} length={vehicles.length}/>
                            </li>
                        )) : <AlertNotVehicle />}

                    </ul>
            }
            {(vehicles.length % 20) === 0 ?
                <div className="d-flex justify-content-center w-100">
                    <button className={styles.button_more} onClick={() => more(router.query)}>
                        Ver mais
                    </button>
                </div>
                : null}
        </>
    )
}