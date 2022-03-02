import Carousel from 'react-bootstrap/Carousel'

export function CarouselCard({array}) {
    return (
        <Carousel fade interval={null}>
            {array?.map(item => (
                <Carousel.Item key={item.name}>
                    <img
                        src={"https://classificados.portalcatalao.com.br/veiculos/"
                            + item.path}
                        alt="First slide"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}