import styles from './styles.module.scss';
export type ColumnType = {
    index?: number;
    header?: string;
    image?: string;
    title?: string;
    subtitle?: string;
    size?: number;
    children?: any;
    button?: string;
    action?: any;
}
export function Column({ index, header, image, title, subtitle, size, children, button }: ColumnType) {

    return (
        <div className={styles.column + ` col-md-${size}`}>
            {image &&
                <div className={styles.image}>
                    <img src={image} alt={'Image'} />
                </div>
            }
            <div className='d-flex flex-column w-100'>
                <h4>{title}</h4>
                <p>{subtitle}</p>
                {button ? <button>{button}</button> : null}
            </div>
        </div>
    )
}