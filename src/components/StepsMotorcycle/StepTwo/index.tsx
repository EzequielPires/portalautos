import { useContext, useEffect, useState } from "react";
import { CarContext } from "../../../contexts/CarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputIco } from "../../InputIco";
import { TextArea } from "../../TextArea";
import { useRouter } from "next/router";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import FipeSvg from "../../../assets/logo-fipe.webp"


import { faEllipsisH, faTachometerAlt, faDollarSign, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { MotorcycleContext } from "../../../contexts/MotorcycleContext";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export function StepTwo() {
    const {
        motorcycle,
        step,
        setStep,
        createMotorcycle,
        editVehicle
    } = useContext(MotorcycleContext);
    const [response, setResponse] = useState(true);
    const newRouter = useRouter();
    const { id } = newRouter.query;

    const handleCreateVehicle = (e) => {
        setResponse(false);
        if (id) {
            editVehicle(e, id).then(() => {
                setStep(3);
            })
        } else {
            createMotorcycle(e);
        }
    }

    if (step < 2) {
        return null;
    }
    return (
        <div className={step === 2 ? styles.step_two : styles.step_two + ' ' + styles.concluded}>
            <div className={styles.step_header}>
                <div className={styles.state}>
                    <FontAwesomeIcon icon={step <= 2 && !id ? faEllipsisH as IconProp : faCheck as IconProp} />
                </div>
                <div className={styles.step_title}>
                    <span>ETAPA 2</span>
                    <span className={styles.title}>Anúncio</span>
                </div>
            </div>
            <button className={step === 2 ? "d-none" : null} onClick={() => setStep(2)}>EDITAR</button>
            <div className={styles.content}>
                <div className="d-flex flex-column gap-4">
                    <div className="d-flex flex-column">
                        <InputIco
                            label="Preço*"
                            type="text"
                            ico={faDollarSign}
                            {...motorcycle.price}
                        />
                        <p className={styles.alert }><img src={FipeSvg.src} style={{width: 48}}/>{` R$ ${VMasker.toMoney(motorcycle.fipe_price.value)}`}</p>
                        <div className={styles.input_box}>
                            <input
                                type="checkbox"
                                name="price"
                                id="price"
                                checked={motorcycle.visible_price.value}
                                onChange={motorcycle.visible_price.onChange}
                            />
                            <label htmlFor="price">Ocultar preço</label>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <InputIco
                            label="Km*"
                            type="text"
                            ico={faTachometerAlt}
                            {...motorcycle.mileage_traveled}
                        />
                        <div className={styles.input_box}>
                            <input
                                type="checkbox"
                                name="new"
                                id="new"
                                checked={motorcycle.new.value}
                                onChange={motorcycle.new.onChange}
                            />
                            <label htmlFor="new">Veículo usado</label>
                        </div>
                    </div>
                    <TextArea
                        label="Descrição"
                        {...motorcycle.description}
                    />
                    <small>Descreva a situação do veículo ou informações relevantes do mesmo. Coloque as características e opcionais na etapa 4 e 5.</small>

                </div>
                <div className={styles.group_button}>
                    {motorcycle.mileage_traveled.value === '' || motorcycle.price.value === '' || response === false ?
                        <button className={styles.btn_primary + " " + styles.disabled}>Prosseguir</button> :
                        <button className={styles.btn_primary} onClick={handleCreateVehicle}>Prosseguir</button>
                    }
                    <button className={styles.btn_secondary} onClick={() => newRouter.push('/meus-anuncios')}>Descartar</button>
                </div>
            </div>
        </div>
    );
}