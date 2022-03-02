import Link from "next/link";
import router from "next/router"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faChevronCircleRight, faChevronRight, faEnvelope, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

import Volkswagen from "../../../assets/volkswagen .svg";
import Chevrolet from "../../../assets/chevrolet.svg";
import Fiat from "../../../assets/fiat.svg";
import Ford from "../../../assets/ford.svg";
import Hyundai from "../../../assets/hyundai.svg";
import Mitsubishi from "../../../assets/mitsubishi.svg";
import Honda from "../../../assets/honda.svg";
import Toyota from "../../../assets/toyota.svg";
import Renault from "../../../assets/renault.svg";

import styles from "./style.module.scss";
import {ButtonMore} from "../../ButtonMore";
import {useContext} from "react";
import {FilterContext} from "../../../contexts/FilterContext";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const brands = [
    {
        id: 1,
        name: "Volkswagen",
        img: Volkswagen.src
    },
    {
        id: 2,
        name: "Chevrolet",
        img: Chevrolet.src
    },
    {
        id: 3,
        name: "Fiat",
        img: Fiat.src
    },
    {
        id: 4,
        name: "Ford",
        img: Ford.src
    },
    {
        id: 5,
        name: "Hyundai",
        img: Hyundai.src
    },
    {
        id: 6,
        name: "Mitsubishi",
        img: Mitsubishi.src
    },
    {
        id: 7,
        name: "Honda",
        img: Honda.src
    },
    {
        id: 8,
        name: "Toyota",
        img: Toyota.src
    },
    {
        id: 9,
        name: "Renault",
        img: Renault.src
    },
]

export function BrandVehicle() {
    const {brand, setBrand, model, setModel, version, setVersion, setActive} = useContext(FilterContext);

    return (
        <div className={styles.brand_vehicle}>
            <span className={styles.title}>Marca do veículo</span>
            {!brand ?
                <div className="d-flex flex-wrap gap-4">
                    {brands?.map(item => (
                        <button key={item.id} className={styles.card} onClick={() => {
                            router.replace(`${router.asPath}/${item.name.toLowerCase()}`);
                            setBrand(item)
                        }}>
                            <div className={styles.imgage}>
                                <img src={item.img} alt=""/>
                            </div>
                            <span>{item.name}</span>
                        </button>
                    ))}
                </div>
                :
                <div className="d-flex align-items-center flex-column gap-2">
                    <div className="d-flex w-100 flex-column">
                        <button className={styles.select} onClick={() => {
                            setBrand(null);
                            router.replace(`/${router.query.id[0]}`);
                        }}>
                            <span className="d-flex align-items-center gap-2">
                                <div className={styles.imgage}>
                                <img src={brand.img} alt=""/>
                            </div>
                                {brand.name}
                            </span>
                            <FontAwesomeIcon icon={faTrashAlt as IconProp}/>
                        </button>
                        <button className={styles.select} onClick={() => {!model ? setActive(true) : setModel(null)}}>
                            {model ?
                                <>
                                    {model.name}
                                    <FontAwesomeIcon icon={faTrashAlt as IconProp}/>
                                </>
                                :
                                <>
                                    <span>Todos os modelos</span>
                                    <FontAwesomeIcon icon={faChevronRight as IconProp}/>
                                </>
                            }
                        </button>
                        <button className={styles.select} onClick={() => {!version ? setActive(true) : setVersion(null)}}>
                            {version ?
                                <>
                                    {version.name}
                                    <FontAwesomeIcon icon={faTrashAlt as IconProp}/>
                                </>
                                :
                                <>
                                    <span>Todas as versões</span>
                                    <FontAwesomeIcon icon={faChevronRight as IconProp}/>
                                </>
                            }
                        </button>
                    </div>
                </div>
            }
            {!brand ?
                <div className="d-flex justify-content-end mt-3">
                    <ButtonMore/>
                </div>
                : null
            }


        </div>
    )
}