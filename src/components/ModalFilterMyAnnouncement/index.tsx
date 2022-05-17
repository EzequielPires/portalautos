import {useContext, useEffect, useState} from "react";
import styles from "./styles.module.scss";
import {Modal} from "react-bootstrap";
import {Select} from "../Select";
import {api} from "../../services/api";
import {useRouter} from "next/router";
import {FilterDashboardContext} from "../../contexts/FilterDashboardContext";

export function ModalFilterMyAnnouncement({filter}) {
    const {handleQuery} = useContext(FilterDashboardContext);
    const router = useRouter();
    const {type, state, brand} = router.query;

    return (
        <div className={'d-flex flex-column'}>
            <div className={styles.toggle}>
                <button className={type === 'car' ? styles.active : null} onClick={() => handleQuery({state, type: 'car'})}>Carros</button>
                <button className={type === 'motorcycle' ? styles.active : null} onClick={() => handleQuery({state, type: 'motorcycle'})}>Motos</button>
            </div>
            <div className="d-flex flex-wrap gap-3 p-3 mt-2" style={{width: '100%', maxWidth: 840, background: '#fff', borderRadius: 6, boxShadow: '0 0 4px rgba(0, 0, 0, .1)'}}>
                <Select
                    label={"Marca*"}
                    options={filter.brand.options}
                    onChange={(e) => handleQuery({state, type, brand: e})}
                    value={filter.brand.value}
                    error={null}
                    validate={filter.brand.validate}
                />
                <Select
                    label={"Modelo*"}
                    options={filter.model.options}
                    onChange={(e) => handleQuery({state, type, brand, model: e})}
                    value={filter.model.value}
                    error={null}
                    validate={filter.model.validate}
                />
            </div>
        </div>
    )
}