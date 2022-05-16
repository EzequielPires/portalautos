import {useContext, useEffect, useState} from 'react';
import { AnnouncementContext } from '../../../contexts/AnnouncementContext';
import { useFetch } from '../../../hooks/useFetch';
import { AlertNotVehicle } from '../../AlertNotVehicle';
import { Loading } from '../../Loading';
import styles from './styles.module.scss';
import { TabCard } from './TabCard';
import {TabSearch} from "./TabSearch";

export function TabContent({ link, active }) {
    const {
        vehiclesSold,
        setVehiclesSold,

        activeVehicles,
        setActiveVehicles,

        inactiveVehicles,
        setInactiveVehicles,

        incompleteVehicles,
        setIncompleteVehicles,

        setIdentifiedVehicle,

        searchVehicles
    } = useContext(AnnouncementContext);
    const { data } = useFetch<any>(link);
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lengthResponse, setLengthResponse] = useState(0);

    const moreVehiclesActive = (param) => {
        setLoading(true);
        {active === "Ativos" ?
            searchVehicles(`active=1&page=${vehicles.length / 20 + 1}&limit=20`).then(res => {
                console.log(res);
                setActiveVehicles([...vehicles, ...res.result]);
                setLengthResponse(res.length);
                setLoading(false);
            })
            : null}
        {active === "Removidos" ?
            searchVehicles(`active=0&page=${vehicles.length / 20 + 1}&limit=20`).then(res => {
                setInactiveVehicles([...vehicles, ...res.result]);
                setLoading(false);
            })
            : null}
        {active === "Incompletos" ?
            searchVehicles(`complete=0&page=${vehicles.length / 20 + 1}&limit=20`).then(res => {
                setIncompleteVehicles([...vehicles, ...res.result]);
                setLoading(false);
            })
            : null}
        {active === "Vendidos" ?
            searchVehicles(`sold=1&page=${vehicles.length / 20 + 1}&limit=20`).then(res => {
                setVehiclesSold([...vehicles, ...res.result]);
                setLoading(false);
            })
            : null}
    }

    useEffect(() => {
        { data && data.data.vehicles ? setVehicles(data.data.vehicles.result) : null}
        { data && data.data.vehicles ? setLengthResponse(data.data.vehicles.result.length) : null}
        { data && data.data.vehicles && active === "Ativos" ? setActiveVehicles(data.data.vehicles.result ) : null}
        { data && data.data.vehicles && active === "Vendidos" ? setVehiclesSold(data.data.vehicles.result ) : null}
        { data && data.data.vehicles && active === "Removidos" ? setInactiveVehicles(data.data.vehicles.result ) : null}
        { data && data.data.vehicles && active === "Search" ? setIdentifiedVehicle(data.data.vehicles.result ) : null}
    }, [data]);

    useEffect(() => {
        { active === "Ativos" && activeVehicles ? setVehicles(activeVehicles) : null}
        { active === "Incompletos" && incompleteVehicles ? setVehicles(incompleteVehicles) : null}
        { active === "Removidos" && inactiveVehicles ? setVehicles(inactiveVehicles) : null}
        { active === "Vendidos" && vehiclesSold ? setVehicles(vehiclesSold) : null}
    }, [activeVehicles, inactiveVehicles, incompleteVehicles, vehiclesSold]);

    if( !data ) {
        return <Loading />
    }

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
            {(vehicles.length % 20) === 0 && vehicles.length >= 20 && lengthResponse > 0 ?
                <div className="d-flex justify-content-center w-100">
                    <button className={styles.button_more} onClick={() => moreVehiclesActive('active=1')}>
                        Ver mais
                    </button>
                </div>
                : null}
        </>
    )
}