import styles from "./styles.module.scss";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { FilterContext } from "../../../contexts/FilterContext";

export function MileageRange() {
    const route = useRouter();
    const { filter } = useContext(FilterContext);
    const { filter: link } = route.query;
    const [minInput, setMinInput] = useState('260.000 Km');
    const [maxInput, setMaxInput] = useState('750.000 Km');
    const renge_first = useRef(null);
    const renge_last = useRef(null);
    const input01 = useRef(null);
    const input02 = useRef(null);
    const range = useRef(null);

    const handleRange = useCallback(() => {
        setMinInput(VMasker.toMoney(renge_first.current.value, {
            precision: 0,
            delimiter: '.',
        }) + ' Km');
        setMaxInput(VMasker.toMoney(renge_last.current.value, {
            precision: 0,
            delimiter: '.',
        }) + ' Km')
        range.current.style.left = ((parseInt(renge_first.current.value) / parseInt(renge_first.current.max)) * 100) + "%";
        range.current.style.right = 100 - (parseInt(renge_last.current.value) / parseInt(renge_last.current.max)) * 100 + "%";
    }, [filter.mileage_traveled_min.value, filter.mileage_traveled_max.value])

    useEffect(() => {
        handleRange();
    }, [filter.mileage_traveled_min.value, filter.mileage_traveled_max.value]);

    useEffect(() => {
        if (filter.mileage_traveled_min.value === '' && filter.mileage_traveled_max.value === '') {
            filter.mileage_traveled_min.setValue('0');
            filter.mileage_traveled_max.setValue('999999');
        }
    }, [filter]);

    /* const handleOnChange = (e) => {
        if ((renge_last.current.value - renge_first.current.value) < 1000) {
            if (e.target.classList.contains("range-min")) {
                setMin(parseInt(renge_last.current.value) - 1000 + '');
            } else {
                console.log(min + 1000)
                setMax(parseInt(renge_first.current.value) + 1000 + '');
            }
        } else {
            setMin(renge_first.current.value);
            setMinInput(VMasker.toMoney(renge_first.current.value, {
                precision: 0,
                delimiter: '.',
            }) + ' Km');
            setMax(renge_last.current.value);
            setMaxInput(VMasker.toMoney(renge_last.current.value, {
                precision: 0,
                delimiter: '.',
            }) + ' Km')
            range.current.style.left = ((parseInt(renge_first.current.value) / parseInt(renge_first.current.max)) * 100) + "%";
            range.current.style.right = 100 - (parseInt(renge_last.current.value) / parseInt(renge_last.current.max)) * 100 + "%";
        }
    } */

    const handleOnChange = (e) => {
        if ((renge_last.current.value - renge_first.current.value) < 1000) {
            if (e.target.classList.contains("range-min")) {
                filter.mileage_traveled_min.setValue(parseInt(renge_last.current.value) - 1000 + '');
            } else {
                filter.mileage_traveled_max.setValue(parseInt(renge_first.current.value) + 1000 + '');
            }
        } else {
            filter.mileage_traveled_min.setValue(renge_first.current.value);
            filter.mileage_traveled_max.setValue(renge_last.current.value);
        }
    }

    const handleLink = () => {
        let aopi = route.asPath.split('?');
        route.replace(`${aopi[0]}${filter.buildQuery("mileage_traveled", [renge_first.current.value, renge_last.current.value], link)}`);
    }

    return (
        <div className={styles.price_range}>
            <span className={styles.title}>Quilometragem do veículo</span>
            <div className={styles.wrapper_price_range}>
                <div className={styles.price_input + " price-input d-flex gap-3"}>
                    <div className={styles.field + " field"}>
                        <span>Min</span>
                        <input
                            ref={input01}
                            type="text"
                            className={styles.input_min + " input-min"}
                            value={minInput}
                            readOnly={true}
                        />
                    </div>
                    <div className={styles.field + " field"}>
                        <span>Max</span>
                        <input
                            ref={input02}
                            type="text"
                            className={styles.input_max + " input-max"}
                            value={maxInput}
                            readOnly={true}
                        />
                    </div>
                </div>
                <div className={styles.slider + " slider mt-4"}>
                    <div className={styles.progress + " progress"} ref={range}></div>
                </div>
                <div className={styles.range_input + " range-input"}>
                    <input
                        ref={renge_first}
                        type="range"
                        className={styles.input_range + " range-min"}
                        min="0"
                        max="999999"
                        value={filter.mileage_traveled_min.value}
                        onChange={handleOnChange}
                        onMouseUp={() => handleLink()}
                        step="100" />
                    <input
                        ref={renge_last}
                        type="range"
                        className={styles.input_range + " range-max"}
                        min="0" max="999999"
                        value={filter.mileage_traveled_max.value}
                        onChange={handleOnChange}
                        onMouseUp={() => handleLink()}
                        step="100" />
                </div>
            </div>
        </div>
    )
}