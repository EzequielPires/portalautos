import styles from "./styles.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";
import { useState } from "react";

export function Gallery({ images }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className={styles.gallery + " gallery"}>
            <div className={styles.content + " gallery flex-column"}>
                {images.length > 2 ?
                    <>
                        <Swiper
                            id={styles.swiper}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[Navigation, Pagination, FreeMode, Thumbs]}
                            centeredSlides={true}
                            spaceBetween={16}
                            slidesPerView="auto"
                            navigation
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper2"
                        >
                            {images?.map(item => (
                                <SwiperSlide key={item.name} id={styles.swiper_slide}>
                                    <img src={"https://portalautos.com.br/"
                                        + item.path} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            id={styles.swiper_thumb}
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView="auto"
                            freeMode={false}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper3"
                        >
                            {images?.map(item => (
                                <SwiperSlide key={item.name} id={styles.swiper_slide_thumb}>
                                    <img src={"https://portalautos.com.br/"
                                        + item.path} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </> :
                    <>
                        <Swiper
                            id={styles.swiper}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[Navigation, Pagination, FreeMode, Thumbs]}
                            spaceBetween={16}
                            slidesPerView="auto"
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper2"
                        >
                            {images?.map(item => (
                                <SwiperSlide key={item.name} id={styles.swiper_slide}>
                                    <img src={"https://portalautos.com.br/"
                                        + item.path} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            id={styles.swiper_thumb}
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView="auto"
                            freeMode={false}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper3"
                        >
                            {images?.map(item => (
                                <SwiperSlide key={item.name} id={styles.swiper_slide_thumb}>
                                    <img src={"https://portalautos.com.br/"
                                        + item.path} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                }
            </div>
        </div>
    )
}