import "./SocialCards"
import { Container, Col, Row } from "react-bootstrap"
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"
const SocialCards = () => {
    return (
        // <Container>
        <div>
            <Row className="d-flex justify-space-between">
                <Col md={12} lg={6} >
                    <div className="cards mx-5">
                        <div className="face face1 bg-info">
                            <div className="content">
                                <FaFacebookF className="social fb" style={{ color: "white" }} />
                                <h3>Facebook</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Follow Me!</a>
                            </div>
                        </div>
                    </div></Col>
                <Col md={12} lg={6} >
                    <div class="cards mx-5">
                        <div className="face face1 bg-primary">
                            <div className="content">
                                <FaLinkedin className="social" />
                                <h3>linkedin</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Follow Me!</a>
                            </div>
                        </div>
                    </div></Col>
                <Col md={6}>
                    <div class="cards mx-5">
                        <div className="face face1 bg-danger">
                            <div className="content">
                                <FaInstagram className="social ins" />
                                <h3>Instagram</h3>
                            </div>
                        </div>
                        <div className="face face2 ">
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Follow Me!</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row></div>
        // {/* </Container > */ }
    )
}

export default SocialCards
