import { BsFillCheckSquareFill } from "react-icons/bs";
import { IoShieldCheckmark } from "react-icons/io5";
import { Footer } from "../../components/Footer";
import { InputDefault } from "../../components/InputDefault";
import { NavbarFixed } from "../../components/NavbarFixed";
import useForm from "../../hooks/useForm";
import Bg from "../../assets/mecanico.png";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Icon } from "../../components/Icon";

export default function Servicos() {
    const cpf = useForm('cpf');
    return (
        <div className={styles.container}>
            <NavbarFixed />
            <div className={styles.banner}>
                <div className="container d-flex justify-content-between">
                    <div className={styles.content}>
                        <div className="d-flex align-items-center mb-3">
                            <h2>Com o Portal Autos você economiza para cuidar do seu carro!</h2>
                        </div>
                        <h4>Você pode consertar seu carro, fazer um check-up ou sair com ele brilhando. Aproveite os descontos!</h4>
                        <button className={styles.btn}>
                            Saiba mais
                        </button>
                    </div>
                    <img src={Bg.src} alt="" />
                </div>
            </div>
            <div className="container py-5">
                <h2 className={styles.title}>Ganhe descontos agendando serviços com o <span>Portal Autos</span></h2>
                <div className="d-flex">
                    <ul className="d-flex justify-content-center flex-wrap gap-5 mt-4 w-100">
                        <li className={styles.item}>
                            <div className="d-flex flex-column align-items-center gap-2">
                                <Icon name={'lavagem'} color={'var(--main-color)'} size={56} />
                                <span className={styles.title_item}>Lavagem e Estética</span>
                            </div>
                            <span>Lavagens e Higienização</span>
                            <Link href={'/seguros'}>
                                <a>Gerar cupom</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <div className="d-flex flex-column align-items-center gap-2">
                                <Icon name={'seguradoura'} color={'var(--main-color)'} size={56} />
                                <span className={styles.title_item}>Seguros</span>
                            </div>
                            <span>Cotações, seguros e coberturas</span>
                            <Link href={'/seguros'}>
                                <a>Gerar cupom</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <div className="d-flex flex-column align-items-center gap-2">
                                <Icon name={'reparos'} color={'var(--main-color)'} size={56} />
                                <span className={styles.title_item}>Manutenção Preventiva</span>
                            </div>
                            <span>Check-up e alinhamento do carro</span>
                            <Link href={'/seguros'}>
                                <a>Gerar cupom</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}