import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { Select } from "../../Select";
import { useContext, useEffect } from "react";
import { CarContext } from "../../../contexts/CarContext";
import { FormImages } from "../../FormImages";
import { InputDefault } from "../../InputDefault";
import { Loading } from "../../Loading";
import { useRouter } from "next/router";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function StepFour() {
    const {
        car,
        editVehicle,
        loading,
        step,
        setStep,
    } = useContext(CarContext);
    const router = useRouter();
    const { id } = router.query;

    const checkConcluded = () => {
        if (car.categories.value != '0' ||
            car.styles.value != '0' ||
            car.fuels.value != '0' ||
            car.fuel_systems.value != '0' ||
            car.gear_shifts.value != '0' ||
            car.doors.value != '0' ||
            car.plate.value != ''
        ) {
            return true;
        } else {
            return false;
        }
    }

    const handleDoors = (value) => car.doors.setValue(value);
    const handleGearNumber = (value) => car.gear_number.setValue(value);


    return (
        <div className={step === 4 ? styles.step_four : styles.step_four + ' ' + styles.concluded}>
            <div className={styles.step_header}>
                <div className={!checkConcluded() ? styles.state : styles.state + ' ' + styles.concluded}>
                    <FontAwesomeIcon icon={step === 4 || !checkConcluded() ? faEllipsisH as IconProp : faCheck as IconProp} />
                </div>
                <div className={styles.step_title}>
                    <span>ETAPA 4</span>
                    <span className={styles.title}>Características</span>
                </div>
            </div>
            <button className={step === 4 ? "d-none" : null} onClick={() => setStep(4)}>EDITAR</button>
            <div className={styles.content}>
                <div className="d-flex flex-wrap gap-4">
                    <Select
                        label="Categoria"
                        options={car.categories.options}
                        onChange={car.categories.onChange}
                        value={car.categories.value}
                        validate={car.categories.validate}
                        error={null}
                    />
                    <Select
                        label="Estilo"
                        options={car.styles.options}
                        onChange={car.styles.onChange}
                        value={car.styles.value}
                        validate={car.styles.validate}
                        error={null}
                    />
                    <Select
                        label="Combustível"
                        options={car.fuels.options}
                        onChange={car.fuels.onChange}
                        value={car.fuels.value}
                        validate={car.fuels.validate}
                        error={null}
                    />
                    <Select
                        label="Sistema de combustível"
                        options={car.fuel_systems.options}
                        onChange={car.fuel_systems.onChange}
                        value={car.fuel_systems.value}
                        validate={car.fuel_systems.validate}
                        error={null}
                    />
                    <Select
                        label="Câmbio de marchas"
                        options={car.gear_shifts.options}
                        onChange={car.gear_shifts.onChange}
                        value={car.gear_shifts.value}
                        validate={car.gear_shifts.validate}
                        error={null}
                    />
                    <Select
                        label="Direção"
                        options={car.directions.options}
                        onChange={car.directions.onChange}
                        value={car.directions.value}
                        validate={car.directions.validate}
                        error={null}
                    />
                    <Select
                        label="Freios"
                        options={car.brakes.options}
                        onChange={car.brakes.onChange}
                        value={car.brakes.value}
                        validate={car.brakes.validate}
                        error={null}
                    />
                    <div className="d-flex flex-column" style={{ flex: 1, maxWidth: 392 }}>
                        <InputDefault
                            label="Placa"
                            onChange={car.plate.onChange}
                            value={car.plate.value}
                            onBlur={car.plate.onBlur}
                            type="text"
                            error={car.plate.error}
                        />
                        <small style={{ color: "#999" }}>Visível apenas no administrativo</small>
                    </div>
                    <div className="d-flex flex-wrap w-100 gap-4">
                        <div className={styles.last_digit + " d-flex"}>
                            <label htmlFor="">Quantidade de portas</label>
                            <small>Selecione:</small>
                            <div className="d-flex gap-2">
                                <button onClick={() => handleDoors(1)} className={car.doors.value === 1 ? styles.active : null}>1</button>
                                <button onClick={() => handleDoors(2)} className={car.doors.value === 2 ? styles.active : null}>2</button>
                                <button onClick={() => handleDoors(3)} className={car.doors.value === 3 ? styles.active : null}>3</button>
                                <button onClick={() => handleDoors(4)} className={car.doors.value === 4 ? styles.active : null}>4</button>
                                <button onClick={() => handleDoors(5)} className={car.doors.value === 5 ? styles.active : null}>5</button>
                                <button onClick={() => handleDoors(6)} className={car.doors.value === 6 ? styles.active : null}>6</button>
                                <button onClick={() => handleDoors(7)} className={car.doors.value === 7 ? styles.active : null}>7</button>
                            </div>
                        </div>
                        <div className={styles.last_digit + " d-flex"}>
                            <label htmlFor="">Quantidade de marchas</label>
                            <small>Selecione:</small>
                            <div className="d-flex gap-2">
                                <button onClick={() => handleGearNumber(1)} className={car.gear_number.value === 1 ? styles.active : null}>1</button>
                                <button onClick={() => handleGearNumber(2)} className={car.gear_number.value === 2 ? styles.active : null}>2</button>
                                <button onClick={() => handleGearNumber(3)} className={car.gear_number.value === 3 ? styles.active : null}>3</button>
                                <button onClick={() => handleGearNumber(4)} className={car.gear_number.value === 4 ? styles.active : null}>4</button>
                                <button onClick={() => handleGearNumber(5)} className={car.gear_number.value === 5 ? styles.active : null}>5</button>
                                <button onClick={() => handleGearNumber(6)} className={car.gear_number.value === 6 ? styles.active : null}>6</button>
                                <button onClick={() => handleGearNumber(7)} className={car.gear_number.value === 7 ? styles.active : null}>7</button>
                                <button onClick={() => handleGearNumber(8)} className={car.gear_number.value === 8 ? styles.active : null}>8</button>
                                <button onClick={() => handleGearNumber(9)} className={car.gear_number.value === 9 ? styles.active : null}>9</button>
                                <button onClick={() => handleGearNumber(10)} className={car.gear_number.value === 10 ? styles.active : null}>10</button>
                                <button onClick={() => handleGearNumber(11)} className={car.gear_number.value === 11 ? styles.active : null}>11</button>
                                <button onClick={() => handleGearNumber(12)} className={car.gear_number.value === 12 ? styles.active : null}>12</button>
                            </div>
                        </div>

                    </div>
                </div>
                {loading ? <Loading /> : null}
                <div className={styles.group_button}>
                    <button className={styles.btn_primary} onClick={(e) => {
                        editVehicle(e, id).then(() => setStep(step + 1));
                    }}>Prosseguir</button>
                    <button className={styles.btn_secondary} onClick={(e) => {
                        editVehicle(e, id).then(() => router.push('/meus-anuncios'));
                    }}>Salvar e sair</button>
                </div>
            </div>
            {loading ? <Loading /> : null}
        </div>
    );
}