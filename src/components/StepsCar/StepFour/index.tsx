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
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export function StepFour() {
    const {
        getCategoriesCar,
        getFuel,
        getSystemFuel,
        getStyle,
        getGearshift,
        editVehicle,
        last_digit_plate,
        listStyle,
        style,
        doors,
        listCategory,
        listFuel,
        listSystemFuel,
        listGearshift,
        category,
        gearshift,
        fuel,
        systemFuel,
        loading,
        setLoading,
        step,
        setStep,
        direction,
        listDirection,
        getDirection,

    } = useContext(CarContext);
    const router = useRouter();
    const { id } = router.query;
    const listDoors = [
        {
            id: 1,
            name: '1',
        },
        {
            id: 2,
            name: '2',
        },
        {
            id: 3,
            name: '3',
        },
        {
            id: 4,
            name: '4',
        },
        {
            id: 5,
            name: '5',
        }
    ]

    useEffect(() => {
        if (
            id &&
            step === 4 &&
            listCategory.length === 0
        ) {
            setLoading(true);
            getCategoriesCar().then(() => {
                getStyle().then(() => {
                    getFuel().then(() => {
                        getSystemFuel().then(() => {
                            getGearshift().then(() => {
                                getDirection().then(() => {
                                    setLoading(false);
                                })
                            });
                        });
                    });
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
            doors.value != '0' ||
            last_digit_plate.value != ''
        ) {
            return true;
        } else {
            return false;
        }
    }

    const handleLastDigit = (value) => {
        last_digit_plate.setValue(value);
    }

    const handleDoors = (value) => {
        doors.setValue(value);
    }


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
                        label="Direção"
                        options={listDirection}
                        onChange={direction.onChange}
                        value={direction.value}
                        validate={direction.validate}
                        error={null}
                    />

                    <div className="d-flex flex-wrap w-100 gap-4">
                        <div className={styles.last_digit + " d-flex"}>
                            <label htmlFor="">Quantidade de portas</label>
                            <small>Selecione:</small>
                            <div className="d-flex gap-2">
                                <button onClick={() => handleDoors(1)} className={doors.value === 1 ? styles.active : null}>1</button>
                                <button onClick={() => handleDoors(2)} className={doors.value === 2 ? styles.active : null}>2</button>
                                <button onClick={() => handleDoors(3)} className={doors.value === 3 ? styles.active : null}>3</button>
                                <button onClick={() => handleDoors(4)} className={doors.value === 4 ? styles.active : null}>4</button>
                                <button onClick={() => handleDoors(5)} className={doors.value === 5 ? styles.active : null}>5</button>
                                <button onClick={() => handleDoors(6)} className={doors.value === 6 ? styles.active : null}>6</button>
                                <button onClick={() => handleDoors(7)} className={doors.value === 7 ? styles.active : null}>7</button>
                            </div>
                        </div>
                        <div className="d-flex flex-column" style={{flex: 1}}>
                            <InputDefault
                                label="Placa"
                                onChange={last_digit_plate.onChange}
                                value={last_digit_plate.value}
                                onBlur={last_digit_plate.onBlur}
                                type="text"
                                error={last_digit_plate.error}
                            />
                            <small style={{color: "#999"}}>Visível apenas no administrativo</small>
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