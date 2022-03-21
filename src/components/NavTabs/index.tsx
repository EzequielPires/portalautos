import { useContext, useEffect, useState } from 'react';
import { AnnouncementContext } from '../../contexts/AnnouncementContext';
import useForm from '../../hooks/useForm';
import { TabButton } from './TabButton';
import { TabContent } from './TabContent';
import { InputSearch } from '../InputSearch';
import { ButtonSecondary } from '../ButtonSecondary';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from './styles.module.scss';

export function NavTabs() {
    const search = useForm('search_id');
    const [active, setActive] = useState('Ativos');
    const [link, setLink] = useState('/vehicle/list?limit=16&active=1');
    //const { searchVehiclesIdentified } = useContext(AnnouncementContext);

    const onClick = (link) => {
        setActive(link);
        {link === 'Ativos' ? setLink('/vehicle/list?limit=12&active=1') : null}
        {link === 'Removidos' ? setLink('/vehicle/list?limit=12&active=0') : null}
        {link === 'Incompletos' ? setLink('/vehicle/list?limit=12&complete=0') : null}
        {link === 'Vendidos' ? setLink('/vehicle/list?limit=12&sold=1') : null}
        {link === 'Search' ? setLink(`/vehicle/list?limit=12&identifier=${search.value}&plate=${search.value}`) : null}
    }
    const searchVehicle = (e) => {
        e.preventDefault();
        if (search.validate()) {
            onClick('Search');
        }
    }
    useEffect(() => {
        onClick('Ativos');
    }, [])

    return (
        <div className={styles.navtabs}>
            <div className="d-flex flex-wrap gap-3 justify-content-between mb-5">
                <InputSearch onSubmit={searchVehicle} {...search}/>
                <ButtonSecondary text={"CRIAR ANÚNCIO"} ico={faPlus} link='/cadastrar-anuncio'/>
            </div>
            <nav className={styles.nav}>
                <TabButton Link="Ativos" Active={active} onClick={onClick} />
                <TabButton Link="Incompletos" Active={active} onClick={onClick} />
                <TabButton Link="Removidos" Active={active} onClick={onClick} />
            </nav>
            <hr />
            <div className="mt-4 mt-4 d-flex flex-column align-items-center">
                <TabContent link={link} active={active}/>
            </div>
        </div>
    )
}