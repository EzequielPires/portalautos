import router from "next/router";
import { useContext, useEffect, useState } from "react";
import { Select } from "../../Select";
import { CarContext } from "../../../contexts/CarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { faCheck, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { ModalReportVehicle } from "../../ModalReportVehicle";

export function StepOne() {
    const {
        getBrand,
        getModel,
        getYearModel,
        getYearFabrication,
        getVersion,
        getColor,
        setColorFinish,
        handleSubmit,
        step,
        setStep,
        car
    } = useContext(CarContext);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    useEffect(() => {
        getBrand();
    }, []);

    return (
        <div className={step === 1 ? styles.step_one : styles.step_one + ' ' + styles.concluded}>
            <div className={styles.step_header}>
                <div className={styles.state}>
                    <FontAwesomeIcon icon={step === 1 ? faEllipsisH as IconProp : faCheck as IconProp} />
                </div>
                <div className={styles.step_title}>
                    <span>ETAPA 1</span>
                    <span className={styles.title}>Veículo</span>
                </div>
            </div>
            <button className={step < 2 ? "d-none" : null} onClick={() => setStep(1)}>EDITAR</button>
            <div className={styles.content}>
                <div className="d-flex flex-wrap gap-4">
                    <Select
                        label="Marca*"
                        placeholder="Selecione uma marca"
                        options={car.brand.options}
                        onChange={getModel}
                        value={car.brand.value}
                        validate={car.brand.validate}
                        error={car.brand.error}
                        filter={true}
                    />
                    <Select
                        label="Modelo*"
                        placeholder="Selecione um modelo"
                        options={car.model.options}
                        onChange={getYearModel}
                        value={car.model.value}
                        validate={car.model.validate}
                        error={car.model.error}
                    />
                    <Select
                        label="Ano do Modelo*"
                        placeholder="Selecione um ano do modelo"
                        options={car.year_model.options}
                        onChange={getYearFabrication}
                        value={car.year_model.value}
                        validate={car.year_model.validate}
                        error={car.year_model.error}
                    />
                    <Select
                        label="Ano de Fabricação*"
                        placeholder="Selecione um ano de fabricação"
                        options={car.year_manufacture.options}
                        onChange={getVersion}
                        value={car.year_manufacture.value}
                        validate={car.year_manufacture.validate}
                        error={car.year_manufacture.error}
                    />
                    <Select
                        label="Versão*"
                        placeholder="Selecione uma versão"
                        options={car.version.options}
                        onChange={getColor}
                        value={car.version.value}
                        validate={car.version.validate}
                        error={car.version.error}
                    />
                    <Select
                        label="Cor*"
                        placeholder="Selecione uma cor"
                        options={car.color.options}
                        onChange={setColorFinish}
                        value={car.color.value}
                        validate={car.color.validate}
                        error={car.color.error}
                    />
                </div>
                <ModalReportVehicle show={show} handleClose={handleClose} />
                <button className={styles.button_link} onClick={() => {
                    handleShow();
                }}>
                    Não encontrou o veículo que procurava?
                </button>
                <div className={styles.group_button}>
                    <button className={styles.btn_primary} onClick={(e) => handleSubmit(e)}>Prosseguir</button>
                    <button className={styles.btn_secondary} onClick={() => router.push('/meus-anuncios')}>Descartar</button>
                </div>
            </div>
        </div>
    );
}