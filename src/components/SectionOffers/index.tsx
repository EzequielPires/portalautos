import styles from "./styles.module.scss"
import { CardAnnouncement } from "../CardAnnouncement";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { SkeletonCardAnnouncement } from "../Skeleton/SkeletonCardAnnouncement";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";

export function SectionOffers() {
    const { data, error } = useFetch('/ad/filter?type=car&limit=8');
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        data && data.data.result.vehicles ? setVehicles(data.data.result.vehicles) : null;
    }, [data]);

    return (
        <section className={styles.section_offers}>
            <div className="d-flex justify-content-start justify-content-md-center" style={{ paddingLeft: 12 }}>
                <h4 className={styles.title}>Top <span>ofertas</span> da semana</h4>
            </div>
            <ul className={styles.wrapper + " section_offers d-flex gap-4"}>
                {
                    vehicles.length === 0 && !error ?
                        <Swiper
                            id={styles.swiper}
                            modules={[Navigation]}
                            spaceBetween={24}
                            slidesPerView="auto"
                            navigation
                        >
                            <SwiperSlide id={styles.swiper_slide}>
                                <SkeletonCardAnnouncement />
                            </SwiperSlide>
                            <SwiperSlide id={styles.swiper_slide}>
                                <SkeletonCardAnnouncement />
                            </SwiperSlide>
                            <SwiperSlide id={styles.swiper_slide}>
                                <SkeletonCardAnnouncement />
                            </SwiperSlide>
                            <SwiperSlide id={styles.swiper_slide}>
                                <SkeletonCardAnnouncement />
                            </SwiperSlide>
                            <SwiperSlide id={styles.swiper_slide}>
                                <SkeletonCardAnnouncement />
                            </SwiperSlide>
                            <SwiperSlide id={styles.swiper_slide}>
                                <SkeletonCardAnnouncement />
                            </SwiperSlide>
                            <SwiperSlide id={styles.swiper_slide}>
                                <SkeletonCardAnnouncement />
                            </SwiperSlide>
                        </Swiper> :
                        <Swiper
                            id={styles.swiper}
                            modules={[Navigation]}
                            spaceBetween={24}
                            slidesPerView="auto"
                            navigation
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {vehicles?.map(item => (
                                <SwiperSlide id={styles.swiper_slide} key={item.id}>
                                    <CardAnnouncement data={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                }
            </ul>
        </section>
    )
}