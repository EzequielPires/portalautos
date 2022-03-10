import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

export function CarouselCard({ array }) {
    return (
        <Carousel fade interval={null} touch={false} className={"w-100"}>
            {
                array?.map(item => (
                    <Carousel.Item key={item.name}>
                        <Image
                            src={"https://classificados.portalcatalao.com.br/veiculos/"
                                + item.path}
                            layout="fill"
                            loading="eager"
                            onLoad={(e) => console.log(e)}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}