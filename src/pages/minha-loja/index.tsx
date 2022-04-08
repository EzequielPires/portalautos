import Head from "next/head";
import { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa";
import { InputDefault } from "../../components/InputDefault";
import { MenuAside } from "../../components/MenuAside";
import { Navbar } from "../../components/Navbar";
import { useFetchDefault } from "../../hooks/useFetchDefault";
import useForm from "../../hooks/useForm";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

export default function MinhaLoja() {
    const { fetch, value } = useFetchDefault();
    const [store, setStore] = useState(null);
    const name = useForm('name');
    const phone = useForm('tel');
    const wpp = useForm('tel');
    const email = useForm('email');

    const handleStore = async () => {
        const res = await fetch('store/view');
        setStore(res.data);
        res.data.name && name.setValue(res.data.name);
        res.data.email && email.setValue(res.data.email);
        res.data.phone_number && phone.setValue(res.data.phone_number);
        res.data.wpp_number && wpp.setValue(res.data.wpp_number);
    }
    const handleSubmit = async () => {
        if (name.validate() && email.validate() && phone.validate() && wpp.validate()) {
            console.log(name.value);
            const data = new FormData();
            data.append('name', name.value);
            data.append('email', email.value);
            data.append('phone_number', phone.value);
            data.append('wpp_number', wpp.value);
            const res = await api.post('/store/edit', data).then(res => res.data);
            console.log(res.data);
        }
    }

    useEffect(() => {
        handleStore();
    }, []);

    return (
        <div className={styles.minha_loja}>
            <Head>
                <title>Minha loja</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <header className="d-flex">
                <Navbar />
                <MenuAside />
            </header>
            {
                store &&
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.content_header}>
                            <div className={styles.banner}>
                                {store.banner ? <img src={`https://portalautos.com.br/` + store.banner.path} alt="" /> : <FaImage style={{ color: '#fff' }} />}
                            </div>
                            <div className={styles.logo}>
                                {store.logo ? <img src={`https://portalautos.com.br/` + store.logo.path} alt="" /> : <FaImage style={{ color: '#fff' }} />}
                            </div>
                            <div className="d-flex mt-3 mb-4 gap-2">
                                <button className={styles.btn_add_image}>Adicionar Banner</button>
                                <button className={styles.btn_add_image}>Adicionar Logo</button>
                            </div>
                        </div>
                        <div className={styles.content_main}>
                            <InputDefault type="text" id={'name'} label={"Nome da empresa"} {...name} />
                            <InputDefault type="tel" id={'phone'} label={"Celular/telefone para contato"} {...phone} />
                            <InputDefault type="tel" id={'wpp'} label={"Whatsapp para contato"} {...wpp} />
                            <InputDefault type="email" id={'email'} label={"E-mail para contato"} {...email} />
                            <button className={styles.btn_submit} onClick={handleSubmit}>Salvar</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}