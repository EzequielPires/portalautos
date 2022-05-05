import { faEllipsisH, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetServerSideProps } from "next";
import router from "next/router";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { AlertCreateUser } from "../../components/AlertCreateUser";
import { InputDefault } from "../../components/InputDefault";
import { NavbarSecondary } from "../../components/NavbarSecondary";
import { Select } from "../../components/Select";
import useForm from "../../hooks/useForm";
import { useSelect } from "../../hooks/useSelect";
import { vehicle } from "../../services/api";
import styles from "./styles.module.scss";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import { StoreService } from "../../services/StoreService";
import { StoreRepository } from "../../repositories/StoreRepository";

export default function CriarLoja() {
    const storeService = new StoreService();
    const storeRepository = new StoreRepository();
    const name = useForm('name');
    const [response, setResponse] = useState(null);
    const [types, setTypes] = useState([]);
    const typeStore = useSelect();

    const handleTypesStore = async () => {
        const res = await storeRepository.findTypesStore();
        typeStore.setOptions(res.data);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            name.validate() && typeStore.validate(typeStore.value)
        ) {
            const res = await storeService.create(name.value, typeStore.value);
            res && res.success === true ? setResponse(true) : null;
            
        }
    }

    useEffect(() => {
        handleTypesStore();
    }, [])

    return (
        <div className={styles.crate_story}>
            <header className="d-flex flex-column">
                <NavbarSecondary title="CADASTRO DE LOJA" />
            </header>
            <div className={styles.content}>
                {!response ? 
                <div className={styles.step_one}>
                    <div className={styles.step_header}>
                        <div className={styles.state}>
                            <FontAwesomeIcon icon={faStore as IconProp} />
                        </div>
                        <div className={styles.step_title}>
                            <span>CADASTRO</span>
                            <span className={styles.title}>Está na hora de criar sua loja...</span>
                        </div>
                    </div>
                    <div className={styles.content_step}>
                        <div className="d-flex justify-content-center flex-wrap gap-4">
                            <InputDefault label="Nome da loja*" type="text" {...name} />
                            <Select
                                label="Marca*"
                                options={typeStore.options}
                                onChange={typeStore.onChange}
                                value={typeStore.value}
                                validate={typeStore.validate}
                                error={typeStore.error} />
                        </div>
                        <div className={styles.group_button}>
                            <button className={styles.btn_secondary} onClick={() => router.push('/meus-anuncios')}>Descartar</button>
                            <button className={styles.btn_primary} onClick={(e) => handleSubmit(e)}>Criar Loja</button>
                        </div>
                    </div>
                </div>
                : <AlertCreateUser title="Sua loja foi criada com sucesso. " link="/cadastrar-anuncio"/>
                }
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['nextauth.token']: token } = parseCookies(ctx);
    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }
    return {
        props: {
        }
    }
}