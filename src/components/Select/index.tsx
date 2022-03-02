import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { Filter } from "./Filter";
import { List } from "./List";
import useFocus from "../../hooks/useFocus";
import { useFetch } from "../../hooks/useFetch";

type SelectType = {
    label: string,
    options: any,
    onChange: any,
    value: any,
    error: any,
    validate: any,
    placeholder?: string,
    filter?: boolean,
    link?: string
}

export function Select({ label, options, onChange, value, error, validate, placeholder, filter, link }: SelectType) {
    const [inputRef, setInputRef] = useFocus();
    const [show, setShow] = useState(false);
    const [filterValue, setFilterValue] = useState('');
    const [selected, setSelected] = useState(placeholder ?? 'Selecione uma opção');
    
    const handleShow = () => { 
        setShow(!show);
    };

    useEffect(() => {
        {show ? setInputRef() : null}
    }, [show]);

    useEffect(() => {
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
                <label className={styles.label}>{label}</label>
                <span className={selected === placeholder || selected === 'Selecione uma opção' ? styles.placeholder : null}>{selected}</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {show && options.length > 0 ?
                <ul className={styles.body}>
                    {filter || options.length > 5 ? <Filter value={filterValue} onChange={setFilterValue} inputRef={inputRef}/> : null}
                    <List options={options} onChange={onChange} setSelected={setSelected} handleShow={handleShow} filter={filterValue} />
                </ul>
                : null}
            {error && options && options.length > 0 ? <span className={styles.select_error}>{error}</span> : null}
            <div className={styles.overflow} onClick={() => {
                validate(value);
                handleShow();
            }}></div>
        </div>
    );
}

/* import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { Filter } from "./Filter";
import { List } from "./List";

type SelectType = {
    label: string,
    options: any,
    onChange: any,
    value: any,
    error: any,
    validate: any,
    placeholder?: string,
    filter?: boolean
}

export function Select({ label, options, onChange, value, error, validate, placeholder, filter }: SelectType) {
    const [show, setShow] = useState(false);
    const [filterValue, setFilterValue] = useState('');
    const [selected, setSelected] = useState(placeholder ?? 'Selecione uma opção')

    const handleShow = () => setShow(!show);

    useEffect(() => {
        if (options && options.length <= 0) {
            setSelected((placeholder ?? 'Selecione uma opção'));
        }
        if (value) {
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
        <div className={options.length > 0 ? styles.select : styles.select + ' ' + styles.disabled}>
            <button className={show ? styles.show : null} onClick={handleShow}>
                <label className={styles.label}>{label}</label>
                <span>{selected}</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {show && options.length > 0 ?
                <ul className={styles.body}>
                    {filter || options.length > 5 ? <Filter value={filterValue} onChange={setFilterValue}/> : null}
                    <List options={options} onChange={onChange} setSelected={setSelected} handleShow={handleShow} filter={filterValue}/>
                </ul>
                : null}
            {error && options.length > 0 ? <span className={styles.select_error}>{error}</span> : null}
            <div className={styles.overflow} onClick={() => {
                validate(value);
                handleShow();
            }}></div>
        </div>
    );
} */