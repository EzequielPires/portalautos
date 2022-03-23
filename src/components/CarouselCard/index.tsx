import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

export function CarouselCard({ array }) {
    return (
        <>
            {
                array.length > 1 ?
                    <Carousel fade interval={null} touch={false} className={"w-100"}>
                        {array?.map(item => (
                            <Carousel.Item key={item.name}>
                                <img
                                    src={"https://portalautos.com.br/"
                                        + item.path}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    : <img src={"https://portalautos.com.br/" + array[0].path} alt="First slide" />
            }
        </>

    )
}