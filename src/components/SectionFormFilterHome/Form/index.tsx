import styles from "./styles.module.scss";
import {useContext, useEffect, useState} from "react";
import {FaSlidersH} from "react-icons/fa"
import {Select} from "../../Select";
import router from "next/router";
import {useSelect} from "../../../hooks/useSelect";
import {FilterContext} from "../../../contexts/FilterContext";
import { CarContext } from "../../../contexts/CarContext";

export function Form() {
    const [active, setActive] = useState('carros');
    const {car, getBrand, getModel} = useContext(CarContext);
    const {activeFilter, setActiveFilter} = useContext(FilterContext);
    useEffect(() => {
        getBrand();
    }, []);
    const getIdString = (id, array) => {
        let id_string = '0'
        array.forEach(item => {
            item.id === id ? id_string = item.id_string : null;
        })
        return id_string;
    }
    const buildLink = () => {
        let link = `/${active}`;
        {car.brand.value != '0' ? link = link + '/' + getIdString(car.brand.value, car.brand.options) : null}
        {car.model.value != '0' ? link = link + '/' + getIdString(car.model.value, car.model.options) : null}
        return link;
    }
    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.tab}>
                <button
                    className={active === 'carros' ? styles.active : null}
                    onClick={() => setActive('carros')}
                >
                    Comprar carros
                </button>
                <button
                    className={active === 'motos' ? styles.active : null}
                    onClick={() => setActive('motos')}
                >
                    Comprar motos
                </button>
            </div>
            <div className={styles.content}>
                <div className="d-flex flex-column flex-md-row flex-wrap w-100 gap-md-3">
                    <Select
                        label="Marca"
                        placeholder="Selecione uma marca"
                        options={car.brand.options}
                        onChange={getModel}
                        value={car.brand.value}
                        error={null}
                        validate={car.brand.validate}
                    />
                    <div className="mb-3 mb-md-0 d-md-none"></div>
                    <Select
                        label="Modelo"
                        placeholder="Selecione um modelo"
                        options={car.model.options}
                        onChange={car.model.onChange}
                        value={car.model.value}
                        error={null}
                        validate={car.model.validate}
                    />
                </div>
                <button className={styles.btn} onClick={() => router.push(buildLink())}>VER OFERTAS</button>
                <button
                    className={styles.search_advanced +
                        " d-flex d-md-none align-items-center gap-2 mt-3"}
                    onClick={() => {setActiveFilter(!activeFilter)}}
                >
                    <FaSlidersH />
                    Busca avançada
                </button>
            </div>
        </form>
    );
}