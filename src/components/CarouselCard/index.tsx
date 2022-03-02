import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

export function CarouselCard({array}) {
    return (
        <Carousel fade interval={null} touch={false}>
            <Carousel.Item key={array[0].name}>
                <Image
                    src={"https://classificados.portalcatalao.com.br/veiculos/"
                        + array[0].path}
                    layout="fill"
                    loading="lazy"
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}