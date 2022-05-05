import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronRight, FaTrash } from "react-icons/fa";
import { isTemplateTail } from "typescript";
import { FilterHelper } from "../../../helpers/FilterHelper";
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
    filter?: FilterHelper,
    link?: string,
    clean?: string,
    index?: any
}

export function Select({ options, onChange, value, error, validate, placeholder, filter, link, label, index }: SelectType) {
    const router = useRouter();
    const id = router.query.id || [];
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
                if (item.id_string === value) {
                    setSelected(item.name);
                    onChange(item.id_string);
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
    const remove = () => {
        let link = '/';
        for(let i = 0; i < index; i++) {
            link = link + '/' + id[i];
        }
        router.replace(link);
    }
    return (
        <div className={options && options.length > 0 ? styles.select : styles.select + ' ' + styles.disabled}>
            <button className={show ? styles.show : null} onClick={() => value != '0' ? remove() : handleShow()}>
                <span className={selected === placeholder || selected === 'Selecione uma opção' ? styles.placeholder : null}>{selected}</span>
                {value === "0" ? <FaChevronRight /> : <AiOutlineClose />}
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