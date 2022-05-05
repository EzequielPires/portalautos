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
import { MotorcycleContext } from "../../../contexts/MotorcycleContext";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function StepFour() {
    const {
        motorcycle,
        cylinder,
        last_digit_plate,
        editVehicle,
        loading,
        step,
        setStep
    } = useContext(MotorcycleContext);
    const router = useRouter();
    const { id } = router.query;

    const checkConcluded = () => {
        if (motorcycle.categories.value != '0' ||
            motorcycle.styles.value != '0' ||
            motorcycle.fuels.value != '0' ||
            motorcycle.fuel_systems.value != '0' ||
            motorcycle.gear_shifts.value != '0' ||
            motorcycle.starters.value != '0' ||
            motorcycle.motors.value != '0' ||
            motorcycle.plate.value != ''
        ) {
            return true;
        } else {
            return false;
        }
    }
    const handleGearNumber = (value) => motorcycle.gear_number.setValue(value);

    return (
        <div className={step === 4 ? styles.step_four : styles.step_four + ' ' + styles.concluded}>
            <div className={styles.step_header}>
                <div className={!checkConcluded() ? styles.state : styles.state + ' ' + styles.concluded}>
                    <FontAwesomeIcon icon={step === 4 || !checkConcluded() ? faEllipsisH as IconProp : faCheck as IconProp} />
                </div>
                <div className={styles.step_title}>
                    <span>ETAPA 4</span>
                    <span className={styles.title}>Adicionais</span>
                </div>
            </div>
            <button className={step === 4 ? "d-none" : null} onClick={() => setStep(4)}>EDITAR</button>
            <div className={styles.content}>
                <div className="d-flex flex-wrap gap-4">
                    <Select
                        label="Categoria"
                        options={motorcycle.categories.options}
                        onChange={motorcycle.categories.onChange}
                        value={motorcycle.categories.value}
                        validate={motorcycle.categories.validate}
                        error={null}
                    />
                    <Select
                        label="Estilo"
                        options={motorcycle.styles.options}
                        onChange={motorcycle.styles.onChange}
                        value={motorcycle.styles.value}
                        validate={motorcycle.styles.validate}
                        error={null}
                    />
                    <Select
                        label="Combustível"
                        options={motorcycle.fuels.options}
                        onChange={motorcycle.fuels.onChange}
                        value={motorcycle.fuels.value}
                        validate={motorcycle.fuels.validate}
                        error={null}
                    />
                    <Select
                        label="Sistema de combustível"
                        options={motorcycle.fuel_systems.options}
                        onChange={motorcycle.fuel_systems.onChange}
                        value={motorcycle.fuel_systems.value}
                        validate={motorcycle.fuel_systems.validate}
                        error={null}
                    />
                    <Select
                        label="Câmbio de marchas"
                        options={motorcycle.gear_shifts.options}
                        onChange={motorcycle.gear_shifts.onChange}
                        value={motorcycle.gear_shifts.value}
                        validate={motorcycle.gear_shifts.validate}
                        error={null}
                    />
                    <Select
                        label="Tipo de partida"
                        options={motorcycle.starters.options}
                        onChange={motorcycle.starters.onChange}
                        value={motorcycle.starters.value}
                        validate={motorcycle.starters.validate}
                        error={null}
                    />
                    <Select
                        label="Tipo de freios"
                        options={motorcycle.brakes.options}
                        onChange={motorcycle.brakes.onChange}
                        value={motorcycle.brakes.value}
                        validate={motorcycle.brakes.validate}
                        error={null}
                    />
                    <Select
                        label="Tipo do motor"
                        options={motorcycle.motors.options}
                        onChange={motorcycle.motors.onChange}
                        value={motorcycle.motors.value}
                        validate={motorcycle.motors.validate}
                        error={null}
                    />
                    <div className="d-flex flex-wrap align-items-center w-100 gap-4">
                        <InputDefault
                            label="Placa"
                            onChange={motorcycle.plate.onChange}
                            value={motorcycle.plate.value}
                            onBlur={motorcycle.plate.onBlur}
                            type="text"
                            error={motorcycle.plate.error}
                        />
                        <InputDefault
                            label="CC:"
                            placeholder="Ex.: 160"
                            onChange={motorcycle.cylinder.onChange}
                            value={motorcycle.cylinder.value}
                            onBlur={motorcycle.cylinder.onBlur}
                            type="text"
                            error={motorcycle.cylinder.error}
                        />
                    </div>
                    <div className={styles.last_digit + " d-flex"}>
                        <label htmlFor="">Quantidade de marchas</label>
                        <small>Selecione:</small>
                        <div className="d-flex gap-2">
                            <button onClick={() => handleGearNumber(1)} className={motorcycle.gear_number.value === 1 ? styles.active : null}>1</button>
                            <button onClick={() => handleGearNumber(2)} className={motorcycle.gear_number.value === 2 ? styles.active : null}>2</button>
                            <button onClick={() => handleGearNumber(3)} className={motorcycle.gear_number.value === 3 ? styles.active : null}>3</button>
                            <button onClick={() => handleGearNumber(4)} className={motorcycle.gear_number.value === 4 ? styles.active : null}>4</button>
                            <button onClick={() => handleGearNumber(5)} className={motorcycle.gear_number.value === 5 ? styles.active : null}>5</button>
                            <button onClick={() => handleGearNumber(6)} className={motorcycle.gear_number.value === 6 ? styles.active : null}>6</button>
                            <button onClick={() => handleGearNumber(7)} className={motorcycle.gear_number.value === 7 ? styles.active : null}>7</button>
                            <button onClick={() => handleGearNumber(8)} className={motorcycle.gear_number.value === 8 ? styles.active : null}>8</button>
                            <button onClick={() => handleGearNumber(9)} className={motorcycle.gear_number.value === 9 ? styles.active : null}>9</button>
                            <button onClick={() => handleGearNumber(10)} className={motorcycle.gear_number.value === 10 ? styles.active : null}>10</button>
                            <button onClick={() => handleGearNumber(11)} className={motorcycle.gear_number.value === 11 ? styles.active : null}>11</button>
                            <button onClick={() => handleGearNumber(12)} className={motorcycle.gear_number.value === 12 ? styles.active : null}>12</button>
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