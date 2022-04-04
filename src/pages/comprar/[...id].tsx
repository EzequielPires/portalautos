import { NavbarFixed } from "../../components/NavbarFixed";
import { Gallery } from "../../components/Gallery";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import styles from "./styles.module.scss";
import { SectionOffers } from "../../components/SectionOffers";
import { SectionFinancing } from "../../components/SectionFinancing";
import { Aside } from "../../components/ViewVehicleComponents/Aside";
import { Footer } from "../../components/Footer";
import { BsWhatsapp, BsEnvelope } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { VehicleItems } from "../../components/ViewVehicleComponents/VehicleItems";
import { Accordion } from "react-bootstrap";
import { Datasheet } from "../../components/ViewVehicleComponents/Datasheet";
import { useFetch } from "../../hooks/useFetch";

export default function Comprar() {
    const router = useRouter();
    const id = router.query.id || [];
    const { data, error } = useFetch(id ? `/ad/${id[id.length - 1]}/view` : null);
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        if (data) {
            setVehicle(data.data);
        }

    }, [id, data]);
    if(error) {
        return <div>
            <p>Error</p>
        </div>
    }

    return (
        <Accordion alwaysOpen className={styles.comprar + " comprar"}>
            <NavbarFixed />
            {vehicle ?
                <>
                    <Gallery images={vehicle.gallery.images} />
                    <div className="d-flex justify-content-center">
                        <div className={styles.content}>
                            <div className="d-flex flex-column">
                                <div className={styles.main}>
                                    <div className="d-flex w-100 flex-column">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex flex-column">
                                                <h2 className={styles.title}>
                                                    {
                                                        `${vehicle.version.model.brand.name} `
                                                    }
                                                    <span>{vehicle.version.model.name}</span>
                                                </h2>
                                                <h4 className={styles.version}>{vehicle.version.name}</h4>
                                                <p className={styles.price}>
                                                    <span>R$ </span>{VMasker.toMoney(vehicle.price)}
                                                </p>
                                                <div className={"d-flex d-md-none gap-2 my-4"}>
                                                    <a href="#financing" className={styles.btn_santander}>
                                                        <FontAwesomeIcon icon={faMoneyBillWave as IconProp} />
                                                        Simular Financiamento
                                                    </a>
                                                </div>
                                            </div>
                                            <button className={styles.icon_heart}>
                                                <FaRegHeart />
                                            </button>
                                        </div>
                                        <div className={styles.list_items + " d-flex flex-wrap gap-2"}>
                                            <div className={styles.item}>
                                                <span>Cidade</span>
                                                <strong>Catalão - GO</strong>
                                            </div>
                                            <div className={styles.item}>
                                                <span>Ano</span>
                                                <strong>{vehicle.year_manufacture + "/" + vehicle.year_model}</strong>
                                            </div>
                                            <div className={styles.item}>
                                                <span>Km</span>
                                                <strong>{vehicle.mileage_traveled ? VMasker.toMoney(vehicle.mileage_traveled, {
                                                    precision: 0,
                                                    delimiter: '.',
                                                }) : null}</strong>
                                            </div>
                                        </div>

                                    </div>
                                    <hr />
                                    <Datasheet vehicle={vehicle} />
                                    <hr />
                                    <div className="d-flex flex-column">
                                        <span className={styles.title_section}>Sobre o veículo</span>
                                        <p className={styles.description}>{vehicle.description}</p>
                                    </div>
                                    <hr />
                                    <VehicleItems vehicle={vehicle} />
                                </div>
                                <SectionFinancing />
                            </div>
                            <Aside vehicle={vehicle} />
                        </div>
                    </div>
                    <SectionOffers />
                    <div className={styles.contact}>
                        <button className={styles.btn_whatsapp}>
                            <BsWhatsapp />
                            Whatsapp
                        </button>
                        <button className={styles.btn_message}>
                            <BsEnvelope />
                            Mensagem
                        </button>
                    </div>
                </>
                : <div style={{ height: "100vh" }}></div>}
            <Footer />
        </Accordion>
    );
}