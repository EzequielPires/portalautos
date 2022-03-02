import Link from "next/link"
import styles from "./styles.module.scss";
import {useRouter} from "next/router";

export function Checkbox({id, label, value, onChange}) {
    const route = useRouter();

    return (
        <Link href={`${route.asPath}/${label}`} replace>
            <div className={styles.input_box}>
                <input
                    type="checkbox"
                    name={id}
                    id={id}
                    checked={value}
                    onChange={onChange}
                />
                <label htmlFor={id}>{label}</label>
            </div>
        </Link>
    )
}