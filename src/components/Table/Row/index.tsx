import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import NoImage from "../../../assets/no-image.svg"
import styles from "./styles.module.scss";

export function Row({ children }) {
    return (
        <div className={styles.row + ' row'}>
            {children}
        </div>
    )
}