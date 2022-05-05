import styles from "./styles.module.scss";
import Link from "next/link";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {CardStore} from "../CardStore";
import { useFetchDefault } from "../../hooks/useFetchDefault";
import { useEffect } from "react";

export function SectionStore() {
    const {fetch, value} = useFetchDefault();

    const handleStore = async () => {
        const res = await fetch('/store/list?home=1');
    }

    useEffect(() => {
        handleStore();
    }, []);

    return (
        <div className={styles.section_store}>
            <div className="d-flex justify-content-md-center" style={{paddingLeft: 12}}>
                <h4 className={styles.title}>Confira as <span>lojas</span> perto de você</h4>
            </div>
            <div className={styles.wrapper + " section_store w-100 d-flex justify-content-center gap-4"}>
                <Swiper
                    id={styles.swiper}
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView="auto"
                    navigation
                >
                    {value && value.data?.map(item => (
                            <SwiperSlide id={styles.swiper_slide} key={item.id}>
                                <Link key={item.id} href={`/store/${item.id_string}`}>
                                    <a>
                                        <CardStore data={item}/>
                                    </a>
                                </Link>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </div>
    );
}