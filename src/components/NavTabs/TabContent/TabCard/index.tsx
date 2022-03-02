import router from "next/router";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import NoImage from "../../../../assets/no-image.svg"
import { useContext, useEffect, useState } from "react";
import { AnnouncementContext } from "../../../../contexts/AnnouncementContext";
import { Toggle } from "../../../Form/Toggle";
import { ButtonSecondary } from "../../../ButtonSecondary";
import { faEdit, faTrashAlt, faRetweet } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";
import {ModalActionContext} from "../../../../contexts/ModalActionContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function TabCard({ content }) {
    const { activeVehicle, soldVehicle } = useContext(AnnouncementContext);
    const { handleShow } = useContext(ModalActionContext);
    const [dateAt, setDateAt] = useState('');

    useEffect(() => {
        let date = new Date(content.created_at.date);
        setDateAt(date.toLocaleDateString());
    }, [content]);

    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <img src={content.gallery && content.gallery.images.length > 0
                    ? "https://classificados.portalcatalao.com.br/veiculos/"
                    + content.gallery.images[0].path : NoImage.src}
                    alt=""
                />
                {content.new ? <span className={styles.new}><span>0Km</span></span> : null}
            </div>
            <div className={styles.card_body}>
                <header className="d-flex flex-column">
                    <h4 className={styles.title}>{content.fipe_vehicle.model.name} <span>{content.year_manufacture}/{content.fipe_vehicle.year_model}</span></h4>
                    <h5 className={styles.subtitle}>{content.fipe_vehicle.name}</h5>

                    <h5 className={styles.price}><span>R$</span> {VMasker.toMoney(content.price)}</h5>
                </header>
                <main className="d-flex flex-column justify-content-end align-items-end">
                    <div className="d-flex w-100 flex-wrap justify-content-center align-items-center  mt-3 gap-3">
                        <div className={styles.add}>
                            <span className={styles.identifier}>Id.: <strong>{content.identifier}</strong></span>
                            <span>Criado: <strong>{dateAt}</strong></span>
                        </div>
                        <div className="d-flex justify-content-between w-100">
                            {content.active ?
                                <button className={styles.btn_removed} onClick={() => {
                                    handleShow('Deseja mesmo desativar este anúncio?', 'active', content.id);
                                }}>
                                    <FontAwesomeIcon icon={faTrashAlt}/>
                                    Remover
                                </button> : <button className={styles.btn_removed} onClick={() => {
                                    handleShow('Deseja mesmo restaurar este anúncio?', 'active', content.id);
                                }}>
                                    <FontAwesomeIcon icon={faRetweet}/>
                                    Restaurar
                                </button>}
                            {content.active ?
                            <Toggle
                                label="Vendido: "
                                id="active"
                                checked={content.sold}
                                announcement={content.id}
                                onChange='sold'
                            /> : null}
                        </div>
                        <ButtonSecondary text={"Editar"} ico={faEdit} link={content.type === "car" ? `/cadastrar-anuncio/carro/${content.id}` : `/cadastrar-anuncio/moto/${content.id}`} />
                    </div>
                </main>
            </div>
        </div>
    )
}