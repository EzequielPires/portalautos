import { useContext, useState } from 'react';
import { AnnouncementContext } from '../../../../contexts/AnnouncementContext';
import { TabCard } from '../TabCard';
import styles from './styles.module.scss';

export function TabSearch() {
    const { identifiedVehicle } = useContext(AnnouncementContext);
    return (
        <ul className={"w-100 row"}>
            {identifiedVehicle.length > 0 ? identifiedVehicle.map(item => (
                <li key={item.id} className="col-md-6 mb-4">
                    <TabCard content={item}/>
                </li>
            )) :
            <div className='alert alert-secondary'>
                <h6>Ops, não encontramos resultado para sua busca.</h6>
            </div>}
        </ul>
    );
}