import { useContext, useEffect, useState } from "react";
import { CarContext } from "../../../contexts/CarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputIco } from "../../InputIco";
import { TextArea } from "../../TextArea";
import { useRouter } from "next/router";


import { faEllipsisH, faTachometerAlt, faDollarSign, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { MotorcycleContext } from "../../../contexts/MotorcycleContext";

export function StepTwo() {
    const {
        price,
        mileage_traveled,
        description,

        step,
        setStep,
        performFirstStep,
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
            performFirstStep(e);
        }
    }

    if (step < 2) {
        return null;
    }
    return (
        <div className={step === 2 ? styles.step_two : styles.step_two + ' ' + styles.concluded}>
            <div className={styles.step_header}>
                <div className={styles.state}>
                    <FontAwesomeIcon icon={step === 2 ? faEllipsisH : faCheck} />
                </div>
                <div className={styles.step_title}>
                    <span>ETAPA 2</span>
                    <span className={styles.title}>Anúncio</span>
                </div>
            </div>
            <button className={step < 3 ? "d-none" : null} onClick={() => setStep(2)}>EDITAR</button>
            <div className={styles.content}>
                <div className="d-flex flex-column gap-4">
                    <InputIco
                        label="Km*"
                        type="text"
                        ico={faTachometerAlt}
                        {...mileage_traveled}
                    />
                    <TextArea
                        label="Descrição"
                        {...description}
                    />
                    <InputIco
                        label="Preço*"
                        type="text"
                        ico={faDollarSign}
                        {...price}
                    />
                </div>
                <div className={styles.group_button}>
                    {mileage_traveled.value === '' || price.value === '' || response === false ?
                        <button className={styles.btn_primary + " " + styles.disabled}>Prosseguir</button> :
                        <button className={styles.btn_primary} onClick={handleCreateVehicle}>Prosseguir</button>
                    }
                    <button className={styles.btn_secondary} onClick={() => newRouter.push('/meus-anuncios')}>Descartar</button>
                </div>
            </div>
        </div>
    );
}