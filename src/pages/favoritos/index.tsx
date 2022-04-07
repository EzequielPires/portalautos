import Head from "next/head";
import { useEffect } from "react";
import { CardAnnouncement } from "../../components/CardAnnouncement";
import { MenuAside } from "../../components/MenuAside";
import { Navbar } from "../../components/Navbar";
import { NavbarFixed } from "../../components/NavbarFixed";
import { SkeletonCardAnnouncement } from "../../components/Skeleton/SkeletonCardAnnouncement";
import { useFetchDefault } from "../../hooks/useFetchDefault";
import styles from "./styles.module.scss";

export default function Favoritos() {
    const { value, isLoading, error, fetch } = useFetchDefault();

    const handleFavorites = async () => {
        const res = await fetch('/favorite/list');
        console.log(res);
    }

    useEffect(() => {
        handleFavorites();
    }, []);
    return (
        <div className={styles.favorites}>
            <Head>
                <title>Favoritos</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <header className="d-flex">
                <NavbarFixed />
            </header>
            <div className={styles.content + ' container-fluid'}>
                <h2>
                    Meus Favoritos
                </h2>
                {isLoading ?
                    <div className="d-flex gap-4 flex-wrap">
                        <SkeletonCardAnnouncement />
                        <SkeletonCardAnnouncement />
                        <SkeletonCardAnnouncement />
                        <SkeletonCardAnnouncement />
                        <SkeletonCardAnnouncement />
                        <SkeletonCardAnnouncement />
                        <SkeletonCardAnnouncement />
                        <SkeletonCardAnnouncement />
                        <SkeletonCardAnnouncement />
                        <SkeletonCardAnnouncement />
                    </div>
                    : null}
                <div className="d-flex gap-4 flex-wrap mt-4">
                    {
                        value && value.data.length > 0 ? value.data.map(item => (
                            <CardAnnouncement key={item.id} data={item} />
                        )) : null
                    }
                </div>
            </div>
        </div>
    );
}