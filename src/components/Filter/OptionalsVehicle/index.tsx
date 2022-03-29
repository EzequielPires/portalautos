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
    const route = useRouter();
    
    const { filter } = useContext(FilterContext);
    /* useEffect(() => {
        let aopi = route.asPath.split('?');
        var obj = {
            optional: filter.optional.value
        }
        var encoded = btoa(JSON.stringify(obj));
        if (aopi) {
            
            //console.log(aopi[1]);
            if (filter.optional.value.length > 0) {
                //console.log(filter.optional.value.toString());
                router.replace(aopi[0] + `?filter:${encoded}`);
            }
        }
    }, [filter.optional.value]); */
    useEffect(() => {
        let aopi = route.asPath.split('?');
        if(aopi.length > 1) {
            let split = aopi[1] ? aopi[1].split(":", 2) : [];
            //let decode = split[1];
            let obj = JSON.parse(base64.decode(split[1]));
            console.log(obj.optional);
            filter.optional.setValue(obj.optional);
        }
    }, [route]);
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