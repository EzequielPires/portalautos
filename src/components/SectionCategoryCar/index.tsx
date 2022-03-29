import styles from "./styles.module.scss";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Hatches from "../../assets/hatches.png";
import Suv from "../../assets/suv.png";
import Sedans from "../../assets/sedans.png";
import Picape from "../../assets/picape.png";
import Conversiveis from "../../assets/conversiveis.png";
import Cupe from "../../assets/cupe.png";
import StationWagons from "../../assets/station-wagons .png";
import Minivans from "../../assets/minivans.png";
import {Card} from "./Card";

export function SectionCategoryCar() {
    const data = [
        {
            img: Hatches.src,
            name: "Hatches",
            description: [
                "Uma das categorias de carros mais procuradas são os hatches. Essa categoria de veículo possui uma separação de 2 volumes sendo compartimento dos passageiros, onde fica o motor e cabine, e Compartimento do porta-malas.",
            ]
        },
        {
            img: Sedans.src,
            name: "Sedans",
            description: [
                "Os Sedans, sem dúvida, são uma das categorias de carros preferidas de muitos motoristas. Também conhecidos como veículos de três volumes, eles são muito escolhidos pelas famílias, pois os porta-malas são grandes e os bancos traseiros espaçosos. ",
            ]
        },
        {
            img: Suv.src,
            name: "Suv",
            description: [
                "Cada vez mais popular no país, uma das categorias de carros que mais oferecem conforto são os SUVs. A sigla é para Sport Utility Vehicles, ou Veículo Utilitário Esportivo. Esses modelos são derivados das camionetes e construídos com carroceria monobloco e, em alguns modelos, sobre o chassi, também conhecido como utilitário. ",
            ]
        },
        {
            img: Picape.src,
            name: "Picape",
            description: [
                "A picapes, ou pick-ups, em inglês, são um tipo de veículo com uma caçamba na parte traseira. Elas são indicadas principalmente para aqueles que necessitam fazer o carregamento de cargas rotineiramente. "
            ]
        },
        {
            img: Conversiveis.src,
            name: "Conversíveis",
            description: [
                "Os conversíveis pertencem a uma das categorias de carros mais desejadas por diversos motoristas. A sua principal característica são os modelos com teto removível. O teto desses modelos podem ser removidos de forma elétrica ou manual. É uma categoria de veículo que comporta de 2 a 4 passageiros."
            ]
        },
        {
            img: Cupe.src,
            name: "Cupês",
            description: [
                "Os cupês pertencem às categorias de carros com altura reduzida, 2 portas e carroceria esportiva, porém é possível encontrar alguns modelos de 4 portas."
            ]
        },
        {
            img: StationWagons.src,
            name: "Station Wagons",
            description: [
                "Se você precisa de espaço, o Station Wagons ou peruas é uma das categorias de carros mais indicadas. São modelos que permitem a acomodação de toda a família e de malas, sendo indicados para viagens."
            ]
        },
        {
            img: Minivans.src,
            name: "Minivans",
            description: [
                "As minivans são uma das categorias de carros que também estão entre as preferidas das famílias. Afinal, são sinônimo de espaço e conforto. Alguns modelos têm até 8 lugares e muito espaço no porta-malas."
            ]
        },
    ]
    return (
        <div className={styles.section_category_car}>
            <div className="d-flex justify-content-start justify-content-md-center" style={{padding: 12}}>
                <h4 className={styles.title}>Descubra qual o <span>melhor veículo</span> pra você</h4>
            </div>
            <ul className="section_offers d-flex gap-4">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={'auto'}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation
                >
                    {data?.map(item => (
                        <SwiperSlide id={styles.swiper_slide} key={item.name}>
                            <Card data={item}/>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </ul>
        </div>
    )
}