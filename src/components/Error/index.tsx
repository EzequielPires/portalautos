import Link from "next/link";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import styles from "./styles.module.scss";

export function Error() {
    const [animationData, setAnimationData] = useState<any>();

    useEffect(() => {
        import('../../assets/animations/6873-under-maintenance.json').then(setAnimationData);
    }, []);
    return (
        <div className={styles.error + " d-flex align-items-center justify-content-center"}>
            {animationData ? (
                <div className="d-flex flex-column align-items-center gap-4">
                    <h2>Opps... Parece que algo deu errado!</h2>
                    <Lottie
                        play
                        loop
                        animationData={animationData}
                        style={{ width: 300, height: 300, marginBottom: 10 }}
                    />
                    <Link href={"/"}>
                        <a>Voltar para tela inicial</a>
                    </Link>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}