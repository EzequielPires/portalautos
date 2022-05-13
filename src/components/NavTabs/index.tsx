import {useEffect, useState} from 'react';
import useForm from '../../hooks/useForm';
import {TabButton} from './TabButton';
import {TabContent} from './TabContent';
import {InputSearch} from '../InputSearch';
import {ButtonSecondary} from '../ButtonSecondary';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Select} from "../Select";

import styles from './styles.module.scss';
import {FilterAnnouncementsHelper} from "../../helpers/FilterAnnouncementsHelper";
import {ModalFilterMyAnnouncement} from "../ModalFilterMyAnnouncement";

export function NavTabs() {
    const filter = new FilterAnnouncementsHelper();
    const search = useForm('search_id');
    const [active, setActive] = useState('Ativos');
    const [link, setLink] = useState('/vehicle/list?limit=20&active=1');


    const onClick = (link) => {
        setActive(link);
        {
            link === 'Ativos' ? setLink('/vehicle/list?limit=20&active=1') : null
        }
        {
            link === 'Removidos' ? setLink('/vehicle/list?limit=20&active=0') : null
        }
        {
            link === 'Incompletos' ? setLink('/vehicle/list?limit=20&complete=0') : null
        }
        {
            link === 'Vendidos' ? setLink('/vehicle/list?limit=20&sold=1') : null
        }
        {
            link === 'Search' ? setLink(`/vehicle/list?limit=21&identifier=${search.value}&plate=${search.value}`) : null
        }
    }
    const searchVehicle = (e) => {
        e.preventDefault();
        if (search.validate()) {
            onClick('Search');
        }
    }
    useEffect(() => {
        filter.run();
        onClick('Ativos');
    }, [])

    return (
        <div className={styles.navtabs}>
            <div className="d-flex flex-wrap gap-3 justify-content-between mb-5">
                <InputSearch onSubmit={searchVehicle} {...search}/>
                <ModalFilterMyAnnouncement filter={filter} />
            </div>
            <nav className={styles.nav}>
                <TabButton Link="Ativos" Active={active} onClick={onClick}/>
                <TabButton Link="Vendidos" Active={active} onClick={onClick}/>
                <TabButton Link="Incompletos" Active={active} onClick={onClick}/>
                <TabButton Link="Removidos" Active={active} onClick={onClick}/>
            </nav>
            <hr/>
            <div className="mt-4 mt-4 d-flex flex-column align-items-center">
                <TabContent link={link} active={active}/>
            </div>
        </div>
    )
}