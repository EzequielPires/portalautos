import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export function Filter({value, onChange, inputRef}) {
    return (
        <form onSubmit={(e) => e.preventDefault()} className={styles.filter}>
            <input ref={inputRef} type="text" value={value} onChange={e => onChange(e.target.value.toUpperCase())}/>
            <FontAwesomeIcon icon={faSearch as IconProp} />
        </form>
    );
}