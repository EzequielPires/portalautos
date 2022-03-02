import { useContext, useEffect } from "react";
import { CarContext } from "../../../contexts/CarContext";
import { FormImages } from "../../FormImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { MotorcycleContext } from "../../../contexts/MotorcycleContext";
import {GalleryContext} from "../../../contexts/GalleryContext";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export function StepThree() {
    const { gallery } = useContext(GalleryContext);
    const {
        step,
        setStep,
        editVehicle
    } = useContext(MotorcycleContext);
    const newRouter = useRouter();
    const { id } = newRouter.query;

    const checkConcluded = () => {
        if (
            gallery.length > 0
        ) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className={step === 3 ? styles.step_three : styles.step_three + ' ' + styles.concluded}>
            <div className={styles.step_header}>
                <div className={!checkConcluded() ? styles.state : styles.state + ' ' + styles.concluded}>
                    <FontAwesomeIcon icon={step === 3 || !checkConcluded() ? faEllipsisH as IconProp : faCheck as IconProp} />
                </div>
                <div className={styles.step_title}>
                    <span>ETAPA 3</span>
                    <span className={styles.title}>Galeria</span>
                </div>
            </div>
            <button className={step === 3 ? "d-none" : null} onClick={() => setStep(3)}>EDITAR</button>
            <div className={styles.content}>
                <div className="d-flex flex-wrap gap-4">
                    <FormImages />
                </div>
                <div className={styles.group_button}>
                    <button className={styles.btn_primary} onClick={() => {
                        setStep(step + 1);
                    }}>Prosseguir</button>
                    <button className={styles.btn_secondary} onClick={(e) => {
                        editVehicle(e, id).then(() => newRouter.push('/meus-anuncios'));
                    }}>Salvar e sair</button>
                </div>
            </div>
        </div>
    );
}