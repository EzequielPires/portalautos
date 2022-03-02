import Link from "next/link";
import Illustration from "../../assets/illustration_car.svg";
import styles from "./styles.module.scss";

export function AlertCreateUser({title, link}) {
    return (
        <div className={styles.alert}>
            <img src={Illustration.src} alt="" />
            <p>{title}</p>
            <span>Crie seu primeiro anúncio e anuncie para milhares de pessoas.</span>
            <Link href={link}>
            <a>Anuncie seu veículo</a>
            </Link>
        </div>
    );
}