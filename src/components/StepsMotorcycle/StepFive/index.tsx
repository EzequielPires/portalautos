import { useContext } from "react";
import { CarContext } from "../../../contexts/CarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { NavTabs } from "./NavTabs";
import { useRouter } from "next/router";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import { MotorcycleContext } from "../../../contexts/MotorcycleContext";

export function StepFive() {
    const {
        step,
        setStep,
        editVehicle,
        motorcycle
    } = useContext(MotorcycleContext);
    const router = useRouter();
    const { id } = router.query;

    const checkConcluded = () => {
        if (
            motorcycle.safety.value.length > 0 ||
            motorcycle.optional.value.length > 0 ||
            motorcycle.confort.value.length > 0 ||
            motorcycle.characteristic.value.length > 0
        ) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div className={step === 5 ? styles.step_five : styles.step_five + ' ' + styles.concluded}>
            <div className={styles.step_header}>
                <div className={!checkConcluded() ? styles.state : styles.state + ' ' + styles.concluded}>
                    <FontAwesomeIcon icon={step === 5 || !checkConcluded() ? faEllipsisH as IconProp : faCheck as IconProp} />
                </div>
                <div className={styles.step_title}>
                    <span>ETAPA 5</span>
                    <span className={styles.title}>Adicionais</span>
                </div>
            </div>
            <button className={step === 5 ? "d-none" : null} onClick={() => setStep(5)}>EDITAR</button>
            <div className={styles.content}>
                <NavTabs />
                <div className={styles.group_button}>
                    <button className={styles.btn_primary} onClick={(e) => {
                        editVehicle(e, id).then(() => setStep(step + 1));
                    }}>Prosseguir</button>
                    <button className={styles.btn_secondary} onClick={(e) => {
                        editVehicle(e, id).then(() => router.push('/meus-anuncios'));
                    }}>Salvar e sair</button>
                </div>
            </div>
        </div>
    )
}