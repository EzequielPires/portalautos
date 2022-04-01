import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import NoImage from "../../../assets/no-image.svg"
import styles from "./styles.module.scss";

export function Row({ item }) {
    const [dateAt, setDateAt] = useState('');

    useEffect(() => {
        let date = new Date(item.created_at.date);
        setDateAt(date.toLocaleDateString());
    }, [item]);
    return (
        <div key={item.id} className={styles.row + " row"}>
            <div className={styles.col + " col-md-4"}>
                <div className="d-flex gap-2">
                    <div className={styles.content_image}>
                        <img src={item.gallery && item.gallery.images.length > 0
                            ? "https://portalautos.com.br/"
                            + item.gallery.images[0].path : NoImage.src}
                            alt=""
                        />
                    </div>
                    <div className="d-flex flex-column">
                        <h4 className={styles.title}>{item.version.model.brand.name} {item.version.model.name}</h4>
                        <h5 className={styles.subtitle}>{item.version.name}</h5>
                        <h5 className={styles.price}><span>R$</span> {VMasker.toMoney(item.price)}</h5>
                    </div>
                </div>
            </div>
            <div className={styles.col + " col-md-2"}>
                <h4>{item.identifier}</h4>
            </div>
            <div className={styles.col + " col-md-1"}>
                <h4>{dateAt}</h4>
            </div>
            <div className={styles.col + " col-md-1"}>
                <h4>{item.color ?? "Branco"}</h4>
            </div>
            <div className={styles.col + " col-md-4"}>
                <span className={styles.item}>
                    <FaFacebookF />
                </span>
            </div>
        </div >
    )
}