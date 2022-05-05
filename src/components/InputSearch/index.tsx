import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export function InputSearch({onSubmit, value, onChange}) {
    return (
        <form className={styles.input_search} onSubmit={e => onSubmit(e)}>
            <input type="text" placeholder="Busque por placa ou identificador" value={value} onChange={onChange}/>
            <button>
                <FontAwesomeIcon icon={faSearch as IconProp}/>
            </button>
        </form>
    );
}