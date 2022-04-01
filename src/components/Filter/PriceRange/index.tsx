import styles from "./styles.module.scss";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { FilterContext } from "../../../contexts/FilterContext";

export function PriceRange() {
    const route = useRouter();
    const { filter } = useContext(FilterContext);
    const { filter: link } = route.query;
    const [minInput, setMinInput] = useState('R$ 260.000,00');
    const [maxInput, setMaxInput] = useState('R$ 750.000,00');
    const renge_first = useRef(null);
    const renge_last = useRef(null);
    const input01 = useRef(null);
    const input02 = useRef(null);
    const range = useRef(null);


    const handleRange = useCallback(() => {
        setMinInput('R$ ' + VMasker.toMoney(renge_first.current.value + '00'));
        setMaxInput('R$ ' + VMasker.toMoney(renge_last.current.value + '00'));
        range.current.style.left = ((parseInt(renge_first.current.value) / parseInt(renge_first.current.max)) * 100) + "%";
        range.current.style.right = 100 - (parseInt(renge_last.current.value) / parseInt(renge_last.current.max)) * 100 + "%";
    }, [filter.price_min.value, filter.price_max.value])
    
    useEffect(() => {
        if (filter.price_min.value === '' && filter.price_max.value === '') {
            filter.price_min.setValue('5000');
            filter.price_max.setValue('999999');
        }
    }, []);

    useEffect(() => {
        handleRange();
    }, [filter.price_min.value, filter.price_max.value]);

    const handleOnChange = (e) => {
        if ((renge_last.current.value - renge_first.current.value) < 1000) {
            if (e.target.classList.contains("range-min")) {
                filter.price_min.setValue(parseInt(renge_last.current.value) - 1000 + '');
            } else {
                filter.price_max.setValue(parseInt(renge_first.current.value) + 1000 + '');
            }
        } else {
            filter.price_min.setValue(renge_first.current.value);
            filter.price_max.setValue(renge_last.current.value);
        }
    }

    const handleLink = () => {
        let aopi = route.asPath.split('?');
        route.replace(`${aopi[0]}${filter.buildQuery("price", [renge_first.current.value, renge_last.current.value], link)}`);
    }

    return (
        <div className={styles.price_range}>
            <span className={styles.title}>Faixa de preço</span>
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
                            maxLength={6}
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
                        min="5000"
                        max="999999"
                        value={filter.price_min.value}
                        onChange={handleOnChange}
                        onMouseUp={() => handleLink()}
                        step="100" />
                    <input
                        ref={renge_last}
                        type="range"
                        className={styles.input_range + " range-max"}
                        min="0" max="999999"
                        value={filter.price_max.value}
                        onChange={handleOnChange}
                        onMouseUp={() => handleLink()}
                        step="100" />
                </div>
            </div>
        </div>
    )
}