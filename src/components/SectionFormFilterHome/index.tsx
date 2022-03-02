import styles from "./styles.module.scss"
import {Form} from "./Form";

export function SectionFormFilterHome() {
    return (
        <section className={styles.section_form_filter_home}>
            <div className={styles.car_animated}></div>
            <div className={styles.content}>
                <h2>Busque agora na maior</h2>
                <h1>Plataforma de anúncios de veículos da região</h1>
                <Form />
            </div>
        </section>
    )
}