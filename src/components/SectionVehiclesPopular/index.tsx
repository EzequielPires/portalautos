import styles from "./styles.module.scss"
import {Card} from "./Card";
import Onix from "../../assets/onix.png";
import Gol from "../../assets/gol.png";
import Jeep from "../../assets/jeep.png";
import Hb20 from "../../assets/hb20.png";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

export function SectionVehiclesPopular() {
    const data = [
        {
            id: 1,
            img: Onix.src,
            model: "Onix",
            brand: "Chevrolet",
        },
        {
            id: 2,
            img: Gol.src,
            model: "Gol",
            brand: "Volkswagen",
        },
        {
            id: 3,
            img: Hb20.src,
            model: "HB20",
            brand: "HYundai",
        },
        {
            id: 4,
            img: Jeep.src,
            model: "Renegade",
            brand: "Jeep",
        },
        {
            id: 5,
            img: Onix.src,
            model: "Onix",
            brand: "Chevrolet",
        },
        {
            id: 6,
            img: Hb20.src,
            model: "HB20",
            brand: "HYundai",
        },
        {
            id: 7,
            img: Jeep.src,
            model: "Renegade",
            brand: "Jeep",
        },
        {
            id: 8,
            img: Onix.src,
            model: "Onix",
            brand: "Chevrolet",
        }
    ]
    return (
        <div className={styles.section_vehicles_popular}>
            <div className="d-flex justify-content-start justify-content-md-center" style={{paddingLeft: 12}}>
                <h4 className={styles.title}>Carros <span>mais</span> buscados</h4>
            </div>
            <div className="section_vehicles_popular d-flex justify-content-center gap-4">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView="auto"
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {data?.map(item => (
                        <SwiperSlide id={styles.swiper_slide} key={item.id}>
                            <Card data={item}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
