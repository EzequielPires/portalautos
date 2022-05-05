import Link from "next/link";
import Illustration from "../../assets/illustration_car.svg";
import styles from "./styles.module.scss";

export function AlertNotVehicle() {
    return (
        <div className={styles.alert}>
            <img src={Illustration.src} alt="" />
            <p>Não foi encontrado nenhum veículo...</p>
            <Link href="/cadastrar-anuncio">
                <a>Anuncie seu veículo</a>
            </Link>
        </div>
    );
}