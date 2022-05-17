import Link from 'next/link';
import styles from "./styles.module.scss";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import { FaRegHeart, FaShareAlt, FaFlag, FaHeart } from "react-icons/fa";
import { ModalDefault } from "../../ModalDefault";
import { ModalWhatsapp } from "../../ModalWhatsapp";
import { CardStore } from '../../CardStore';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../../contexts/AuthContext';
export function Aside({ vehicle }) {
    const { user, addFavorite, favorites, removeFavorite } = useContext(AuthContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const router = useRouter();
    const handleFavorite = async () => {
        if (isFavorite) {
            removeFavorite(vehicle.id);
        } else {
            !user ? router.push(`/login?r=${router.asPath}&f=${vehicle.id}`) : addFavorite(vehicle.id);
        }
    }

    useEffect(() => {
        if (favorites?.length > 0) {
            let favorite = false;
            favorites.forEach(item => {
                item === vehicle.id ? favorite = true : null;
            });
            setIsFavorite(favorite);
        }
    }, [favorites]);
    return (
        <div className={styles.aside}>
            <div className="d-flex justify-content-between align-items-start w-100 mb-4">
                <p className={styles.price}><span>R$ </span>{VMasker.toMoney(vehicle.price)}</p>
                <button className={styles.icon_heart} onClick={handleFavorite}>
                    {!isFavorite ? <FaRegHeart /> : <FaHeart style={{ color: '#e91e63' }} />}
                </button>
            </div>
            <div className="d-flex gap-2 mt-3 mb-2">
                <ModalWhatsapp store={vehicle.store} wpp_number={vehicle.store.wpp_number} id_vehicle={vehicle.id} title="Chamar no Whatsapp" />
                <ModalDefault title="Enviar mensagem" />
            </div>
            <div className="d-flex justify-content-center my-3">
                <CardStore data={vehicle.store} />
            </div>
            {/* <div className={"d-flex gap-2 mb-2"}>
                <a href="#financing" className={styles.btn_santander + " mt-2"}>
                    <FontAwesomeIcon icon={faMoneyBillWave as IconProp} />
                    Simular Financiamento
                </a>
                <a href="#financing" className={styles.btn_santander + " mt-2"}>
                    <IoShieldCheckmark />
                    Cotar Seguro
                </a>
            </div> */}
            <div className="d-flex gap-2 ">
                <button className={styles.btn_secondary}>
                    <FaShareAlt />
                    Compartilhar
                </button>
                <button className={styles.btn_secondary}>
                    <FaFlag />
                    Denunciar
                </button>
            </div>

        </div>
    )
}