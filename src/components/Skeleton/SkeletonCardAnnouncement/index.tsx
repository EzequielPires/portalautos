import Skeleton from 'react-loading-skeleton';

import styles from "./styles.module.scss";

export function SkeletonCardAnnouncement() {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <Skeleton duration={1} height={"100%"} width={"100%"} />
            </div>
            <div className={styles.body}>
                <header>
                    <h4>
                        <Skeleton duration={1} height={20} width={"100%"} />
                    </h4>
                    <h5>
                        <Skeleton duration={1} height={16} width={"100%"} />
                    </h5>
                    <h5 className={styles.price}>
                        <Skeleton duration={1} height={28} width={"100%"} />
                    </h5>
                </header>
                <footer>
                    <Skeleton duration={1} height={32} width={"100%"} />
                    <Skeleton duration={1} height={32} width={"100%"} />
                </footer>
            </div>
        </div>
    )
}