import { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss"
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import router from "next/router";

export function Body({ options, title, placeholder, show, setShow, onChange }) {
    const inputRef = useRef(null);
    const [value, setValue] = useState('');
    return (
        <div className={show ? styles.content_more + " " + styles.active : styles.content_more}>
            <div className="d-flex p-3 align-items-center">
                <button className={styles.prev} onClick={setShow}>
                    <FontAwesomeIcon icon={faArrowLeft as IconProp} />
                </button>
                <p className={styles.span}>{title}</p>
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
                <span className={styles.title}>{placeholder}</span>
                <ul>
                    {options?.map(item => (
                        <li key={item.id}>
                            <button onClick={() => {
                                onChange(item.id_string);
                                router.replace(`${router.asPath}/${item.id_string.toLowerCase()}`);
                                setShow();
                            }}>
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}