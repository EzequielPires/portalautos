import router from "next/router";
import { useContext, useEffect, useState } from "react";
import { MotorcycleContext } from "../../../contexts/MotorcycleContext";
import { Select } from "../../Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { ModalReportVehicle } from "../../ModalReportVehicle";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function StepOne() {
    const {
        motorcycle,

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
    } = useContext(MotorcycleContext);
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
                    <span className={styles.title}>Características</span>
                </div>
            </div>
            <button className={step < 2 ? "d-none" : null} onClick={() => setStep(1)}>EDITAR</button>
            <div className={styles.content}>
                <div className="d-flex flex-wrap gap-4">
                    <Select
                        label="Marca*"
                        placeholder="Selecione uma marca"
                        options={motorcycle.brand.options}
                        onChange={getModel}
                        value={motorcycle.brand.value}
                        validate={motorcycle.brand.validate}
                        error={motorcycle.brand.error}
                        filter={true}
                    />
                    <Select
                        label="Modelo*"
                        placeholder="Selecione um modelo"
                        options={motorcycle.model.options}
                        onChange={getYearModel}
                        value={motorcycle.model.value}
                        validate={motorcycle.model.validate}
                        error={motorcycle.model.error}
                        filter={true}
                    />
                    <Select
                        label="Ano do Modelo*"
                        placeholder="Selecione uma opção"
                        options={motorcycle.year_model.options}
                        onChange={getYearFabrication}
                        value={motorcycle.year_model.value}
                        validate={motorcycle.year_model.validate}
                        error={motorcycle.year_model.error}
                        filter={true}
                    />
                    <Select
                        label="Ano de Fabricação*"
                        options={motorcycle.year_manufacture.options}
                        onChange={getVersion}
                        value={motorcycle.year_manufacture.value}
                        validate={motorcycle.year_manufacture.validate}
                        error={motorcycle.year_manufacture.error}
                        filter={true}
                    />
                    <Select
                        label="Versão*"
                        options={motorcycle.version.options}
                        onChange={getColor}
                        value={motorcycle.version.value}
                        validate={motorcycle.version.validate}
                        error={motorcycle.version.error}
                        filter={true}
                    />
                    <Select
                        label="Cor*"
                        placeholder="Selecione uma cor"
                        options={motorcycle.color.options}
                        onChange={setColorFinish}
                        value={motorcycle.color.value}
                        validate={motorcycle.color.validate}
                        error={motorcycle.color.error}
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