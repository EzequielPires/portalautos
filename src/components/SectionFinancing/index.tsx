import Link from "next/link";
import styles from './styles.module.scss';
import useForm from "../../hooks/useForm";
import {useSelect} from "../../hooks/useSelect";
import {InputDefault} from "../InputDefault";
import {Select} from "../Select";
import Logo from "../../assets/Santander-Logo.png";

export function SectionFinancing() {
    const name = useForm('name');
    const birth = useForm('birth');
    const email = useForm('email');
    const cpf = useForm('cpf');
    const tel = useForm('tel');
    const localization = useSelect();
    return (
        <div id="financing" className={styles.container + " d-flex justify-content-center"}>
            <div className={styles.section_financing}>
                <div className={styles.header + " d-flex flex-column align-items-center"}>
                    <img src={Logo.src} style={{width: 120, marginBottom: 16}} alt=""/>
                    <h2>Simulador de Financiamento</h2>
                    <h4>Veja as parcelas desse veículo</h4>
                    <span>Tudo sem compromisso, vamos começar com alguns dados ;)</span>
                </div>
                <div className={styles.field_inputs + " d-flex flex-wrap gap-3"}>
                    <InputDefault
                        label="Nome*"
                        onChange={name.onChange}
                        value={name.value}
                        onBlur={name.onBlur}
                        type="text"
                        error={name.error}
                    />
                    <InputDefault
                        label="Data de Nascimento*"
                        onChange={birth.onChange}
                        value={birth.value}
                        onBlur={birth.onBlur}
                        type="text"
                        error={birth.error}
                    />
                </div>
                <div className={styles.field_inputs + " d-flex flex-wrap gap-3"}>
                    <InputDefault
                        label="E-mail*"
                        onChange={email.onChange}
                        value={email.value}
                        onBlur={email.onBlur}
                        type="email"
                        error={email.error}
                        id={styles.input}
                    />
                    <InputDefault
                        label="CPF*"
                        onChange={cpf.onChange}
                        value={cpf.value}
                        onBlur={cpf.onBlur}
                        type="text"
                        error={cpf.error}

                    />
                </div>
                <div className={styles.field_inputs + " d-flex flex-wrap gap-3"}>
                    <InputDefault
                        label="Telefone*"
                        onChange={tel.onChange}
                        value={tel.value}
                        onBlur={name.onBlur}
                        type="tel"
                        error={tel.error}
                    />
                    <Select
                        label="Localização*"
                        placeholder="Selecione uma marca"
                        options={[]}
                        onChange={null}
                        value={localization.value}
                        validate={localization.validate}
                        error={localization.error}
                        filter={true}
                    />
                </div>
                <span className={styles.terms}>Ao clicar no botão abaixo você autoriza a coleta e envio dos dados para os bancos parceiros conforme nossos <Link
                    href="/">
                    <a>Termos de Uso</a>
                </Link> e <Link href="/">
                    <a>Política de Privacidade</a>
                </Link>
                    .
                </span>
                <div className={styles.group_button + " d-flex w-100 justify-content-center mt-3"}>
                    <button className={styles.btn_primary}>Simular</button>
                </div>

            </div>
        </div>

    )
}