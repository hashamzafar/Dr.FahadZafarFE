import { Carousel, Row, Col, } from "react-bootstrap"




const TreatmentCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIDYnfoYGLyotDQosW1o2QcFzA6vpCT7VzNZjaGfICo0OZvAZqN5nYSFWkF7VYH1Lny8&usqp=CAU"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIDYnfoYGLyotDQosW1o2QcFzA6vpCT7VzNZjaGfICo0OZvAZqN5nYSFWkF7VYH1Lny8&usqp=CAU"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIDYnfoYGLyotDQosW1o2QcFzA6vpCT7VzNZjaGfICo0OZvAZqN5nYSFWkF7VYH1Lny8&usqp=CAU"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}
export default TreatmentCarousel