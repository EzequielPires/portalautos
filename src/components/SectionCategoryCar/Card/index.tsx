import styles from "./styles.module.scss";

export function Card({data}) {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <img src={data.img} alt="" />
            </div>
            <div className={styles.card_body}>
                <div className="d-flex flex-column align-items-center">
                    <h4 className={styles.title}>{data.name}</h4>
                    {data.description?.map(item => (
                        <p key={item}>{item}</p>
                    ))}
                </div>
                <button>Ver ofertas</button>
            </div>
        </div>
    )
}