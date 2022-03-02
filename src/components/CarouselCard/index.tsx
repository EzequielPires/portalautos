import Carousel from 'react-bootstrap/Carousel';

export function CarouselCard({array}) {
    return (
        <Carousel fade interval={null} touch={false}>
            <Carousel.Item key={array[0].name}>
                <img
                    src={"https://classificados.portalcatalao.com.br/veiculos/"
                        + array[0].path}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}