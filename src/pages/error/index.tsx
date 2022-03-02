import Link from "next/link";
import Illustration from "../../assets/illustration_error.svg";
import styles from "./styles.module.scss";
import Head from "next/head";

export default function Error() {
    return (
        <div className={styles.error + " d-flex flex-column justify-content-center align-items-center h-100"}>
            <Head>
                <title>Error</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <h2>Ops... Parece que algo deu errado!</h2>
            <img src={Illustration.src} alt="" />
            <p>Para sua segurança faça login novamente.</p>
            <Link href="/login">
                <a>Login</a>
            </Link>
        </div>
    )
}