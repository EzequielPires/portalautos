import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Body } from "./Body";
import styles from "./styles.module.scss";

type SelectType = {
    label: string,
    options: any,
    onChange: any,
    value: any,
    error: any,
    validate: any,
    placeholder?: string,
    filter?: boolean,
    link?: string,
    clean?: string,
}

export function Select({ options, onChange, value, error, validate, placeholder, filter, link, label }: SelectType) {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(placeholder ?? 'Selecione uma opção');
    const handleShow = () => {
        setShow(!show);
    };
    useEffect(() => {
        if (value === '0') {
            setSelected('Selecione uma opção');
        }
        if (options && options.length <= 0) {
            setSelected((placeholder ?? 'Selecione uma opção'));
        }
        if (value && options) {
            options.forEach(item => {
                if (item.id === value) {
                    setSelected(item.name);
                    onChange(item.id);
                }
                if (value.toString() === item.toString()) {
                    setSelected(item);
                    onChange(item);
                }
                if (value === '0') {
                    setSelected(placeholder ?? 'Selecione uma opção');
                }
            })
        }
    }, [options, value]);
    return (
        <div className={options && options.length > 0 ? styles.select : styles.select + ' ' + styles.disabled}>
            <button className={show ? styles.show : null} onClick={handleShow}>
                <span className={selected === placeholder || selected === 'Selecione uma opção' ? styles.placeholder : null}>{selected}</span>
                <FaChevronRight />
            </button>
            <Body
                onChange={onChange}
                placeholder={placeholder}
                options={options}
                title={label}
                show={show}
                setShow={() => setShow(!show)}
            />
        </div>
    )
}