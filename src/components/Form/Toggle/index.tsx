import { useContext, useEffect, useState } from "react";
import { ModalActionContext } from "../../../contexts/ModalActionContext";
import styles from "./styles.module.scss";

export function Toggle({ label, id, onChange, announcement, checked }) {
    const [activeToggle, setActiveToggle] = useState(checked);
    const { handleShow } = useContext(ModalActionContext);

    const handleChange = () => {
        let mensagem = '';
        {
            activeToggle === true && onChange === 'active' ?
                mensagem = 'Deseja mesmo desativar este anúncio?' :
                null
        }
        {
            activeToggle === false && onChange === 'active' ?
                mensagem = 'Deseja mesmo ativar este anúncio?' :
                null
        }
        {
            activeToggle === true && onChange === 'sold' ?
                mensagem = 'Deseja mesmo desmarcar este anúncio como vendido?' :
                null
        }
        {
            activeToggle === false && onChange === 'sold' ?
                mensagem = 'Deseja mesmo marcar este anúncio como vendido?' :
                null
        }
        handleShow(mensagem, onChange, announcement);
    }

    useEffect(() => {
        setActiveToggle(checked);
    }, [checked]);

    return (
        <div className={styles.toggle}>
            <label className={styles.title} htmlFor={id}>{label}</label>
            <label className={styles.switch}>
                <input
                    name={id}
                    id={id}
                    type="checkbox"
                    checked={activeToggle}
                    onChange={() => handleChange()}
                />
                <span className={styles.slider + " " + styles.round}></span>
            </label>
        </div>
    );
}