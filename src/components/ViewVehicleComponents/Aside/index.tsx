import Link from 'next/link';
import styles from "./styles.module.scss";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import {FaRegHeart, FaShareAlt, FaFlag} from "react-icons/fa";
import {ModalDefault} from "../../ModalDefault";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMoneyBillWave} from "@fortawesome/free-solid-svg-icons";
import {IoShieldCheckmark} from "react-icons/io5";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ModalWhatsapp} from "../../ModalWhatsapp";

export function Aside({vehicle}) {
    return (
        <div className={styles.aside}>
            <div className="d-flex justify-content-between align-items-start w-100 mb-4">
                <p className={styles.price}><span>R$ </span>{VMasker.toMoney(vehicle.price)}</p>
                <button className={styles.icon_heart}>
                    <FaRegHeart/>
                </button>
            </div>
            <div className="d-flex gap-2 mt-3 mb-2">
                <ModalWhatsapp title="Chamar no Whatsapp"/>
                <ModalDefault title="Enviar mensagem"/>
            </div>
            <div className={"d-flex gap-2 mb-2"}>
                <a href="#financing" className={styles.btn_santander + " mt-2"}>
                    <FontAwesomeIcon icon={faMoneyBillWave as IconProp}/>
                    Simular Financiamento
                </a>
                <a href="#financing" className={styles.btn_santander + " mt-2"}>
                    <IoShieldCheckmark/>
                    Cotar Seguro
                </a>
            </div>
            <div className="d-flex gap-2 ">
                <button className={styles.btn_secondary}>
                    <FaShareAlt/>
                    Compartilhar
                </button>
                <button className={styles.btn_secondary}>
                    <FaFlag/>
                    Denunciar
                </button>
            </div>

        </div>
    )
}