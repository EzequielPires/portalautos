import {useContext, useEffect, useState} from 'react';
import useForm from '../../hooks/useForm';
import {TabButton} from './TabButton';
import {TabContent} from './TabContent';
import {InputSearch} from '../InputSearch';

import styles from './styles.module.scss';
import {FilterAnnouncementsHelper} from "../../helpers/FilterAnnouncementsHelper";
import {ModalFilterMyAnnouncement} from "../ModalFilterMyAnnouncement";
import {useRouter} from "next/router";
import {FilterDashboardContext, QueryFilterType} from "../../contexts/FilterDashboardContext";

export function NavTabs() {
    const router = useRouter();
    const {state, type, brand, model} = router.query;
    const {filter, run, handleQuery} = useContext(FilterDashboardContext);
    const search = useForm('search_id');
    const [active, setActive] = useState('Ativos');
    const [link, setLink] = useState('/vehicle/list?limit=20&active=1');

    useEffect(() => {
        !state || !type ? handleQuery({state, type, brand, model}) : null;
        state === 'active' && setActive("Ativos");
        state === 'sold' && setActive("Vendidos");
        state === 'incomplete' && setActive("Incompletos");
        state === 'removed' && setActive("Removidos");
    }, [router, state, type]);

    useEffect(() => {
        !state || !type && handleQuery({});
        run(router.query);
    }, [router.query]);

    return (
        <div className={styles.navtabs}>
            <div className="d-flex flex-wrap gap-3 justify-content-between mb-5">
                <ModalFilterMyAnnouncement filter={filter} />
                <InputSearch onSubmit={() => {}} {...search}/>
            </div>
            <nav className={styles.nav}>
                <TabButton Link="Ativos" Active={active} onClick={() => handleQuery({state: 'active', type})}/>
                <TabButton Link="Vendidos" Active={active} onClick={() => handleQuery({state: 'sold', type})}/>
                <TabButton Link="Incompletos" Active={active} onClick={() => handleQuery({state: 'incomplete', type})}/>
                <TabButton Link="Removidos" Active={active} onClick={() => handleQuery({state: 'removed', type})}/>
            </nav>
            <hr/>
            <div className="mt-4 mt-4 d-flex flex-column align-items-center">
                <TabContent link={link} active={active}/>
            </div>
        </div>
    )
}