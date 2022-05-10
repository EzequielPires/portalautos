import {useContext, useRef, useState} from "react";
import {FilterContext} from "../../../contexts/FilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss"
import {faArrowLeft, faSearch} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {useRouter} from "next/router";

export function ContentMore({options, type, title}) {
    const router = useRouter();
    const inputRef = useRef(null);
    const [value, setValue] = useState('');
    const {active, setActive, filter} = useContext(FilterContext);
    return (
        <div className={active ? styles.content_more + " " + styles.active: styles.content_more}>
            <div className="d-flex p-3 align-items-center">
                <button className={styles.prev} onClick={() => setActive(false)}>
                    <FontAwesomeIcon icon={faArrowLeft as IconProp}/>
                </button>
                <p className={styles.span}>Marcas</p>
            </div>
            <div className="d-flex p-3 pb-0">
                <form onSubmit={(e) => e.preventDefault()} className={styles.filter}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Digite uma marca"
                    />
                    <FontAwesomeIcon icon={faSearch as IconProp} />
                </form>
            </div>
            <div className={styles.content}>
                <span className={styles.title}>Todas as marcas</span>
                <ul>
                    {options?.map(brand => (
                        <li key={brand.id}>
                            <button onClick={() => {
                                router.push(`/${filter.type.value === 'motorcycle' ? 'motos' : 'carros'}/${brand.id_string}`);
                                setActive(false);
                            }}>
                                {brand.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}