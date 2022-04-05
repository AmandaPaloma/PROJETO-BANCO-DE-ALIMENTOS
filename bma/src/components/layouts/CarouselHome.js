import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import agricultura from '../../img/agricultura.png'
import bmaslide from '../../img/bmaslide.png'
import cestasverdes from '../../img/cestasverdes.png'
import styles from './CarouselHome.module.css'

function CarouselHome() {
    return (
        <Container>
            <Carousel indicators={false}>
                <Carousel.Item>
                    <img  src={agricultura} alt="Agricultura Familiar" />
                </Carousel.Item>

                <Carousel.Item>
                    <img  src={bmaslide} alt="BMA" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={cestasverdes} alt="Cestas Verdes" />
                </Carousel.Item>
            </Carousel>
        </Container>
    )

}

export default CarouselHome;

