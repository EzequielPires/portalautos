import {useEffect, useState} from "react";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import {Error} from "../../Error";
import {Loading} from "../../Loading";
import {Accordion} from "react-bootstrap";
import styles from "./styles.module.scss";
import Head from "next/head";
import {NavbarFixed} from "../../NavbarFixed";
import {Gallery} from "../../Gallery";
import {FaMoneyBillWave} from "react-icons/fa";
import {FaRegHeart} from "react-icons/fa";
import {Datasheet} from "../../ViewVehicleComponents/Datasheet";
import {VehicleItems} from "../../ViewVehicleComponents/VehicleItems";
import {SectionFinancing} from "../../SectionFinancing";
import {Aside} from "../../ViewVehicleComponents/Aside";
import {SectionOffers} from "../../SectionOffers";
import {BsEnvelope, BsWhatsapp} from "react-icons/bs";
import {Footer} from "../../Footer";
import {api} from "../../../services/api";
import {useRouter} from "next/router";

export function ByVehicle() {
    const router = useRouter();
    const {id}: any = router.query;
    const [url, setUrl] = useState('');
    const [vehicle, setVehicle] = useState(null);
    const [error, setError] = useState(null);

    const handleVehicle = async () => {
        let idVehicle = id[id.length - 1].replace('.phtml', '');
        const res: any = await api.get(`/ad/${idVehicle}/view`, {
            headers: {
                'X-Requested-Uri': `${router.asPath}`
            }
        }).catch(() => setError(true));
        console.log(res.data.data)
        setVehicle(res.data.data);
    }
    useEffect(() => {
        setUrl(location.href);
        if (id.length > 0) handleVehicle();
    }, [id]);

    if (error) {
        return <Error />
    }

    const generateTitle = () => {
        let link = `${id[0]} ${id[1]} ${id[2]}`;
        return link.toUpperCase();
    }

    if (!vehicle) return <Loading />

    return (
        <Accordion alwaysOpen className={styles.comprar + " comprar"}>
            <Head>
                <title>{generateTitle()}</title>
                <meta name="author" content="Portal Catalão Internet Service" />
                <meta name="title" content={generateTitle()} />
                <meta name="description" content="Se você está procurando o carro ou moto perfeito para a sua vida e não quer pagar rios de dinheiro por isso, nós podemos te ajudar! O PortalAutos oferece a você uma forma de encontrar o seu veículo ideal de forma rápida, fácil e segura." />
                <meta property="og:title" content={generateTitle()} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Se você está procurando o carro ou moto perfeito para a sua vida e não quer pagar rios de dinheiro por isso, nós podemos te ajudar! O PortalAutos oferece a você uma forma de encontrar o seu veículo ideal de forma rápida, fácil e segura." />
                <meta property="og:image" content={`https://portalautos.com.br/${vehicle.gallery.images[0].path}`} />
                <meta property="og:url" content={url} />
            </Head>
            <NavbarFixed />
            {vehicle ?
                <>
                    <Gallery images={vehicle.gallery.images} />
                    <div className="d-flex justify-content-center">
                        <div className={styles.content + ' px-3'}>
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
                                                        <FaMoneyBillWave />
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
                : <div style={{ height: "100vh" }}>

                </div>}
            <Footer />
        </Accordion>
    );
}


