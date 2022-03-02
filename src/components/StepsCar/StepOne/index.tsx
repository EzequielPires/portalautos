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
        brand,
        listBrand,
        getBrand,

        model,
        listModel,
        getModel,

        yearModel,
        listYearModel,
        getYearModel,

        yearFabrication,
        listYearFabrication,
        getYearFabrication,

        version,
        listVersion,
        getVersion,

        color,
        listColor,
        getColor,
        setColorFinish,

        handleSubmit,
        handleStore,
        step,
        setStep,
    } = useContext(CarContext);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    useEffect(() => {
        handleStore().then(() => {
            getBrand();
        });
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
                        options={listBrand}
                        onChange={getModel}
                        value={brand.value}
                        validate={brand.validate}
                        error={brand.error}
                        filter={true}
                    />
                    <Select
                        label="Modelo*"
                        placeholder="Selecione um modelo"
                        options={listModel}
                        onChange={getYearModel}
                        value={model.value}
                        validate={model.validate}
                        error={model.error}
                    />
                    <Select
                        label="Ano do Modelo*"
                        placeholder="Selecione um ano do modelo"
                        options={listYearModel}
                        onChange={getYearFabrication}
                        value={yearModel.value}
                        validate={yearModel.validate}
                        error={yearModel.error}
                    />
                    <Select
                        label="Ano de Fabricação*"
                        placeholder="Selecione um ano de fabricação"
                        options={listYearFabrication}
                        onChange={getVersion}
                        value={yearFabrication.value}
                        validate={yearFabrication.validate}
                        error={yearFabrication.error}
                    />
                    <Select
                        label="Versão*"
                        placeholder="Selecione uma versão"
                        options={listVersion}
                        onChange={getColor}
                        value={version.value}
                        validate={version.validate}
                        error={version.error}
                    />
                    <Select
                        label="Cor*"
                        placeholder="Selecione uma cor"
                        options={listColor}
                        onChange={setColorFinish}
                        value={color.value}
                        validate={color.validate}
                        error={color.error}
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