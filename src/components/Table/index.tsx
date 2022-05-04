import styles from './styles.module.scss';

export type ColumnType = {
    index: number;
    header: string;
    image: string;
    title: string;
    subtitle: string;
    size: number;
}
export type TableType = {

}

export function Table({header, children}) {
    return (
        <div className={styles.table}>
            <div className='row w-100 m-0 p-0'>
                {header.map((item, index) => (
                    <div key={index} className={`${styles.col} col-md-${item.size}`}>
                        <h4>{item.title}</h4>
                    </div>
                ))}
            </div>
            {children}
        </div>
    )
}