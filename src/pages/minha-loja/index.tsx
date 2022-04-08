import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { FaImage } from "react-icons/fa";
import { InputDefault } from "../../components/InputDefault";
import { MenuAside } from "../../components/MenuAside";
import { Navbar } from "../../components/Navbar";
import { Select } from "../../components/Select";
import { useFetchDefault } from "../../hooks/useFetchDefault";
import useForm from "../../hooks/useForm";
import { useSelect } from "../../hooks/useSelect";
import { StoreRepository } from "../../repositories/StoreRepository";
import { api } from "../../services/api";
import { maskPhone } from "../../hooks/useMask";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { AlertContext } from "../../contexts/AlertContext";
import { Loading } from "../../components/Loading";
import { InputIco } from "../../components/InputIco";
import { Input } from "../../components/Input";

export default function MinhaLoja() {
    const { fetch, value } = useFetchDefault();
    const [loading, setLoading] = useState(false);
    const [store, setStore] = useState(null);
    const name = useForm('name');
    const phone = useForm('tel');
    const wpp = useForm('tel');
    const email = useForm('email');
    const typeStore = useSelect();
    const storeRepository = new StoreRepository();
    const [banner, setBanner] = useState(null);
    const [logo, setLogo] = useState(null);
    const router = useRouter();
    const {origin} = router.query;
    const { alertShow } = useContext(AlertContext);

    const handleTypesStore = async () => {
        const res = await storeRepository.findTypesStore();
        typeStore.setOptions(res.data);
    }
    const handleStore = async () => {
        const res = await fetch('store/view');
        setStore(res.data);
        res.data.name && name.setValue(res.data.name.toUpperCase());
        res.data.email && email.setValue(res.data.email);
        res.data.phone_number && phone.setValue(maskPhone(res.data.phone_number));
        res.data.wpp_number && wpp.setValue(maskPhone(res.data.wpp_number));
        res.data.type && typeStore.setValue(res.data.type.id);
        res.data.banner && setBanner(res.data.banner);
        res.data.logo && setLogo(res.data.logo);

    }
    const handleSubmit = async () => {
        if (name.validate() && email.validate() && phone.validate() && wpp.validate()) {
            setLoading(true);
            const data = new FormData();
            data.append('store[name]', name.value);
            data.append('store[email]', email.value);
            data.append('store[phone_number]', phone.value);
            data.append('store[wpp_number]', wpp.value);
            data.append('store[type]', typeStore.value);
            if(store.id) {
                const res:any = await api.post('/store/edit', data).then( async (res) => {
                    if(logo) {
                        let dataLogo = new FormData();
                        dataLogo.append('file', logo);
                        await api.post('store/logo', dataLogo);
                    }
                    if(banner) {
                        let dataBanner = new FormData();
                        dataBanner.append('file', banner);
                        await api.post('store/banner', dataBanner);
                    }
                    return res.data;
                });
                console.log(res);
                if (res.success) {
                    alertShow("success", "Loja alterada com sucesso.");
                    {origin && router.push(`/${origin}`)}
                    setLoading(false);
                } else {
                    alertShow("danger", "Erro ao alterar loja, tente novamente.");
                    setLoading(false);
                }
            } else {
                const res: any = await api.post('/store/create', data).then( async (res) => {
                    if(logo) {
                        let dataLogo = new FormData();
                        dataLogo.append('file', logo);
                        await api.post('store/logo', dataLogo);
                    }
                    if(banner) {
                        let dataBanner = new FormData();
                        dataBanner.append('file', banner);
                        await api.post('store/banner', dataBanner);
                    }
                    return res.data;
                });
                console.log(res);
                if (res.success) {
                    alertShow("success", "Loja criada com sucesso.");
                    {origin && router.push(`/${origin}`)}
                    setLoading(false);
                } else {
                    alertShow("danger", "Erro ao criar loja, tente novamente.");
                    setLoading(false);
                }
            }
        }
    }
    const onChangeBanner = (e) => {
        setBanner(e.target.files[0]);
    }
    const onChangeLogo = (e) => {
        setLogo(e.target.files[0]);
    }

    useEffect(() => {
        handleTypesStore();
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
            {loading && <Loading />}
            {
                store &&
                <div className={styles.content}>
                    {origin === '/integracoes' ? <div className="alert  alert-warning mt-5">Para ver a página de integrações primeiro crie sua loja!</div> : null}
                    {origin === '/cadastrar-anuncio/carro' ? <div className="alert  alert-warning mt-5">Para ver a página de cadastro de veículos primeiro crie sua loja!</div> : null}
                    {origin === '/cadastrar-anuncio/moto' ? <div className="alert  alert-warning mt-5">Para ver a página de cadastro de veículos primeiro crie sua loja!</div> : null}
                    <div className={styles.card}>
                        <div className={styles.content_header}>
                            <div className={styles.banner}>
                                {banner && banner.path ? <img src={`https://portalautos.com.br/` + banner.path} alt="" /> : null}
                                {banner && !banner.path? <img src={window.URL.createObjectURL(banner)} alt="" /> : null}
                                {!store.banner && !banner ? <FaImage style={{ color: '#fff' }} /> : null}
                            </div>
                            <div className={styles.logo}>
                                {logo && logo.path ? <img src={`https://portalautos.com.br/` + store.logo.path} alt="" /> : null}
                                {logo && !logo.path? <img src={window.URL.createObjectURL(logo)} alt="" /> : null}
                                {!store.logo && !logo ? <FaImage style={{ color: '#fff' }} /> : null}
                            </div>
                            <div className="d-flex mt-3 mb-4 gap-2">
                                <input type="file" name="banner" id="banner" className="d-none" onChange={(e) => onChangeBanner(e)}/>
                                <input type="file" name="logo" id="logo" className="d-none" onChange={(e) => onChangeLogo(e)}/>
                                <label htmlFor="banner" className={styles.btn_add_image}>Adicionar Banner</label>
                                <label htmlFor="logo" className={styles.btn_add_image}>Adicionar Logo</label>
                            </div>
                        </div>
                        <div className={styles.content_main}>
                            <Input type="text" id={'name'} label={"Nome da empresa"} error={false} {...name} />
                            <Select label="Tipo de Loja" {...typeStore}/>
                            <Input type="tel" id={'phone'} label={"Celular/telefone para contato"} {...phone} />
                            <Input type="tel" id={'wpp'} label={"Whatsapp para contato"} {...wpp} />
                            <Input type="email" id={'email'} label={"E-mail para contato"} {...email} />
                            <button className={styles.btn_submit} onClick={handleSubmit}>Salvar</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}