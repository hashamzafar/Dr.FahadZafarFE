import { Row, Col, } from "react-bootstrap"
import "./style.css"
import CarouselArtiEdu from "../Carousel/CarouselArtiEdu"

const ArtEduMain = () => {
    return (
        <Row className=' text-color' >
            <Col md={4} height="700px" >
                <div className='bg-dark  eduCard text-color'>



                    <div>
                        <h2>Articles & Education</h2>
                        <h5 > Dr.Fahad Zafar</h5>
                        <hr />
                        <h6>Specialist periodontis and Implant Surgery</h6>
                    </div>

                    <div className="frontimage">
                        {/* <img src="../../img/artAndEdu.jpeg" alt="" width="1400" height="500" /> */}
                    </div>
                </div >
            </Col>


            <Col md={8} >
                {/* <CarouselArtiEdu className="carousel" /> */}
            </Col>
        </Row>


    )
}
export default ArtEduMain
