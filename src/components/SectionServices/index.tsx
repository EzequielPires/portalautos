import Link from 'next/link';
import styles from './styles.module.scss';

export function SectionServices() {
    return (
        <div className={styles.section_services}>
            <h2>Precisando de algo para seu <strong>automóvel</strong></h2>
            <span>Vamos descobrir os melhores serviços para o seu carro perto de você.</span>
            <div className={styles.content}>
                <Link href={'/'}>
                    <a className={styles.item}>
                        <div className={`${styles.ico} ${styles.fa_seguros}`}></div>
                        <span>Corretores de Seguros</span>
                    </a>
                </Link>
                <Link href={'/'}>
                    <a className={styles.item}>
                        <div className={`${styles.ico} ${styles.fa_lava_jato}`}></div>
                        <span>Lava jato</span>
                    </a>
                </Link>
                <Link href={'/'}>
                    <a className={styles.item}>
                        <div className={`${styles.ico} ${styles.fa_financiamento}`}></div>
                        <span>Financiamento</span>
                    </a>
                </Link>
                <Link href={'/'}>
                    <a className={styles.item}>
                        <div className={`${styles.ico} ${styles.fa_pneus}`}></div>
                        <span>Pneus</span>
                    </a>
                </Link>
                <Link href={'/'}>
                    <a className={styles.item}>
                        <div className={`${styles.ico} ${styles.fa_delivery}`}></div>
                        <span>Delivery</span>
                    </a>
                </Link>
                <Link href={'/'}>
                    <a className={styles.item}>
                        <div className={`${styles.ico} ${styles.fa_reboques}`}></div>
                        <span>Reboques e Guinchos</span>
                    </a>
                </Link>
                <Link href={'/'}>
                    <a className={styles.item}>
                        <div className={`${styles.ico} ${styles.fa_mecanica}`}></div>
                        <span>Mecânica em Geral</span>
                    </a>
                </Link>
                <Link href={'/'}>
                    <a className={styles.item}>
                        <div className={`${styles.ico} ${styles.fa_baterias}`}></div>
                        <span>Baterias</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}