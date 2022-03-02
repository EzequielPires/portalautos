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
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export function StepFour() {
    const {
        gears,
        listGears,
        getGears,

        category,
        listCategory,
        getCategory,

        style,
        listStyle,
        getStyle,

        fuel,
        listFuel,
        getFuel,

        systemFuel,
        listSystemFuel,
        getSystemFuel,

        gearshift,
        listGearshift,
        getGearshift,

        starter,
        listStarter,
        getStarter,

        brake,
        listBrake,
        getBrake,

        type_motor,
        listTypeMotor,
        getTypeMotor,

        cylinder,

        listCharacteristics,
        getCharacteristics,

        listOptionals,
        getOptionals,

        last_digit_plate,

        stateNew,
        setStateNew,

        viewVehicle,
        editVehicle,
        loading,
        setLoading,
        announcement,

        step,
        setStep
    } = useContext(MotorcycleContext);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id &&
            step === 4 &&
            listCategory.length === 0) {
            getGears().then(() => setLoading(true));
            getCategory().then(() => {
                getStyle().then(() => {
                    getFuel().then(() => {
                        getSystemFuel().then(() => {
                            getGearshift().then(() => {
                                getStarter().then(() => {
                                    getBrake().then(() => {
                                        getTypeMotor().then(() => {
                                            getGears().then(() => setLoading(false))
                                        })
                                    })
                                })
                            });
                        })
                    })
                });
            });
        }
    }, [id, step]);

    const checkConcluded = () => {
        if (category.value != '0' ||
            style.value != '0' ||
            fuel.value != '0' ||
            systemFuel.value != '0' ||
            gearshift.value != '0' ||
            starter.value != '0' ||
            brake.value != '0' ||
            type_motor.value != '0' ||
            gears.value != '0' ||
            last_digit_plate.value != '' ||
            cylinder.value != ''
        ) {
            return true;
        } else {
            return false;
        }
    }

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
                        options={listCategory}
                        onChange={category.onChange}
                        value={category.value}
                        validate={category.validate}
                        error={null}
                    />
                    <Select
                        label="Estilo"
                        options={listStyle}
                        onChange={style.onChange}
                        value={style.value}
                        validate={style.validate}
                        error={null}
                    />
                    <Select
                        label="Combustível"
                        options={listFuel}
                        onChange={fuel.onChange}
                        value={fuel.value}
                        validate={fuel.validate}
                        error={null}
                    />
                    <Select
                        label="Sistema de combustível"
                        options={listSystemFuel}
                        onChange={systemFuel.onChange}
                        value={systemFuel.value}
                        validate={systemFuel.validate}
                        error={null}
                    />
                    <Select
                        label="Câmbio de marchas"
                        options={listGearshift}
                        onChange={gearshift.onChange}
                        value={gearshift.value}
                        validate={gearshift.validate}
                        error={null}
                    />
                    <Select
                        label="Tipo de partida"
                        options={listStarter}
                        onChange={starter.onChange}
                        value={starter.value}
                        validate={starter.validate}
                        error={null}
                    />
                    <Select
                        label="Tipo de freios"
                        options={listBrake}
                        onChange={brake.onChange}
                        value={brake.value}
                        validate={brake.validate}
                        error={null}
                    />
                    <Select
                        label="Tipo do motor"
                        options={listTypeMotor}
                        onChange={type_motor.onChange}
                        value={type_motor.value}
                        validate={type_motor.validate}
                        error={null}
                    />
                    <Select
                        label="Quantidade de marchas"
                        options={listGears}
                        onChange={gears.onChange}
                        value={gears.value}
                        validate={gears.validate}
                        error={null}
                    />
                    <InputDefault
                        label="Último dígito da placa"
                        placeholder="Ex.: 1"
                        type="text"
                        {...last_digit_plate}
                    />
                    <div className="d-flex flex-wrap align-items-center w-100 gap-4">
                        <InputDefault
                            label="CC:"
                            placeholder="Ex.: 160"
                            type="text"
                            {...cylinder}
                        />
                        <div className={styles.input_box}>
                            <input
                                type="checkbox"
                                name="new"
                                id="new"
                                checked={stateNew}
                                onChange={
                                    () => {
                                        setStateNew(stateNew === true ? false : true)
                                    }}
                            />
                            <label htmlFor="new">Veículo usado</label>
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