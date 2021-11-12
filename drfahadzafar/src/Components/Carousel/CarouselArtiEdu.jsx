import { Carousel, Row, Col, } from "react-bootstrap"
// import Treatment from "../Treatment/Treatment"
import Cards from "../Arti&eduMain/Cards/Cards"


const TreatmentCarousel = () => {
    return (
        <>
            <Carousel className="mb-3 ">
                <Carousel.Item>
                    <Row>
                        <Col lg={6}><Cards /></Col>
                        <Col lg={6}><Cards /></Col>

                    </Row>
                </Carousel.Item >
                <Carousel.Item>
                    <Row>
                        <Col lg={6}><Cards /></Col>
                        <Col lg={6}><Cards /></Col>

                    </Row>

                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col lg={6}><Cards /></Col>
                        <Col lg={6}><Cards /></Col>

                    </Row>

                </Carousel.Item>
            </Carousel >

        </>
    )
}
export default TreatmentCarousel