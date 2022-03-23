import { useContext, useState } from 'react';
import { AnnouncementContext } from '../../../../contexts/AnnouncementContext';
import { AlertNotVehicle } from '../../../AlertNotVehicle';
import { TabCard } from '../TabCard';
import styles from './styles.module.scss';

export function TabSearch() {
    const { identifiedVehicle } = useContext(AnnouncementContext);
    return (
        <ul className={styles.tab_content + " d-flex flex-wrap gap-4 justify-content-evelyn"}>
            {identifiedVehicle.length > 0 ? identifiedVehicle.map(item => (
                <li key={item.id}>
                    <TabCard content={item} />
                </li>
            )) :
            <div className='d-flex w-100 justify-content-center'>
            <AlertNotVehicle />
            </div> 
            }

        </ul>
    );
}