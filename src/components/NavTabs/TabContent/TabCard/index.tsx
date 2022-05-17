import VMasker from "vanilla-masker/build/vanilla-masker.min";
import NoImage from "../../../../assets/no-image.svg"
import {useContext, useEffect, useState} from "react";
import {Toggle} from "../../../Form/Toggle";
import {ButtonSecondary} from "../../../ButtonSecondary";
import {faEdit, faTrashAlt, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {ModalActionContext} from "../../../../contexts/ModalActionContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

import styles from "./styles.module.scss";

export function TabCard({content, length}) {
    const {handleShow} = useContext(ModalActionContext);
    const [dateAt, setDateAt] = useState('');

    useEffect(() => {
        let date = new Date(content.created_at.date);
        let dia = String(date.getDate()).padStart(2, '0');
        let mes = String(date.getMonth() + 1).padStart(2, '0');
        let ano = date.getFullYear();
        setDateAt(dia + '/' + mes + '/' + ano);
    }, [content]);

    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <img src={content.gallery && content.gallery.images.length > 0
                    ? "https://portalautos.com.br/"
                    + content.gallery.images[0].path : NoImage.src}
                     alt=""
                />
                {content.new ? <span className={styles.new}><span>0Km</span></span> : null}
            </div>
            <div className={styles.card_body}>
                <header className="d-flex flex-column">
                    <h4 className={styles.title}>
                        {`${content.version.model.brand.name} ${content.version.model.name}`}
                    </h4>
                    <h5 className={styles.subtitle}>{content.version.name}</h5>
                    <span className={styles.subtitle}>{content.year_manufacture}/{content.year_model}</span>

                    <h5 className={styles.price}><span>R$</span> {VMasker.toMoney(content.price)}</h5>
                </header>
                <div className={styles.actions + " d-flex flex-column"}>
                    <div className="d-flex flex-wrap w-100 mb-3">
                        <ButtonSecondary text={"Editar"} ico={faEdit}
                                         link={content.type === "car" ? `/cadastrar-anuncio/carro/${content.id}` : `/cadastrar-anuncio/moto/${content.id}`}/>
                        {content.active ?
                            <button className={styles.btn_removed} onClick={() => {
                                handleShow('Deseja mesmo desativar este anúncio?', 'active', content.id, length);
                            }}>
                                <FontAwesomeIcon icon={faTrashAlt as IconProp}/>
                                Remover
                            </button> : <button className={styles.btn_removed} onClick={() => {
                                handleShow('Deseja mesmo restaurar este anúncio?', 'active', content.id, length);
                            }}>
                                <FontAwesomeIcon icon={faRetweet as IconProp}/>
                                Restaurar
                            </button>
                        }
                    </div>
                    {content.active ?
                        <Toggle
                            label="Vendido: "
                            id="active"
                            checked={content.sold}
                            announcement={content.id}
                            onChange='sold'
                            length={length}
                        /> : null}
                    <div className={styles.add + " mt-3"}>
                        <span className={styles.identifier}>Id.: <strong>{content.identifier}</strong></span>
                        <span>Criado: <strong>{dateAt}</strong></span>
                    </div>
                </div>
            </div>
        </div>
    )
}