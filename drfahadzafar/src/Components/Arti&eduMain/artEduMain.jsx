import { Row, Col, } from "react-bootstrap"
import "./style.css"
import Carousel from "../Carousel/Carousel"

const ArtEduMain = () => {
    return (
        <Row className=' text-color' >
            <Col md={4} height="700px" >
                <div className='bg-dark pt-3 eduCard text-color'>



                    <div>
                        <h2>Articles & Education</h2>
                        <h5 > Dr.Fahad Zafar</h5>
                        <hr />
                        <h6>Specialist periodontis and Implant Surgery</h6>
                    </div>

                    <div className="frontimage">
                        <img src="../../img/artAndEdu.jpeg" alt="" height="500" width="800" />
                    </div>
                </div >
            </Col>


            <Col md={8} >
                <Carousel />
            </Col>
        </Row>


    )
}
export default ArtEduMain
