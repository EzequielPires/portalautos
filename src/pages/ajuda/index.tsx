import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { MenuAside } from "../../components/MenuAside";
import { Navbar } from "../../components/Navbar";
import styles from "./styles.module.scss";

export default function Help() {
    return (
        <div className={styles.help}>
            <header className="d-flex">
                <Navbar />
                <MenuAside />
            </header>
            <div className={styles.content}>
            </div>
        </div>
    )
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