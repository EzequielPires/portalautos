import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { useCheckbox } from "../../../hooks/useCheckbox";
import { Checkbox } from "../../Checkbox";
import { ButtonMore } from "../../ButtonMore";
import { FilterContext } from "../../../contexts/FilterContext";
import router, { useRouter } from "next/router";
import base64 from "base-64";

export function OptionalsVehicle() {
    
    const { filter } = useContext(FilterContext);
    return (
        <div className={styles.optionals_vehicle}>
            <span className={styles.title}>Opcionais</span>
            <div className="d-flex gap-2 flex-column">
                {filter.optional.options?.map(item => (
                    <Checkbox key={item.id} id={item.id} label={item.name} type="optional" {...filter.optional} />
                ))}
            </div>
            <div className="d-flex justify-content-end mt-3">
                <ButtonMore />
            </div>
        </div>
    );
}