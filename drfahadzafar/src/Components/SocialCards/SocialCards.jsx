import "./SocialCards"
import { Container, Col, Row } from "react-bootstrap"
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"
const SocialCards = () => {
    return (

        <div className="mr-5"><Container className="flex-container">
            <Row className="d-flex justify-space-between">
                <Col md={12} lg={6} >
                    <div className="cards ">
                        <div className="face face1 bg-info">
                            <div className="content">
                                <FaFacebookF className="social fb" style={{ color: "white" }} />
                                <h3>Facebook</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>Follow for future updates on courses and lectures.</p>
                                <a href="https://www.facebook.com/fahad.zafar.505" className="mb-3" target="_blank">Follow Me!</a>
                            </div>
                        </div>
                    </div></Col>

                <Col md={12} lg={6} >
                    <div className="cards ">
                        <div className="face face1 bg-primary">
                            <div className="content">
                                <FaLinkedin className="social" />
                                <h3>linkedin</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>Let’s connect!</p>
                                <a href="https://www.linkedin.com/in/fahad-zafar-81b001179/" className="mb-3">Follow Me!</a>
                            </div>
                        </div>
                    </div></Col>
                <Col md={6}>
                    <div className="cards ">
                        <div className="face face1 bg-danger">
                            <div className="content">
                                <FaInstagram className="social ins" />
                                <h3>Instagram</h3>
                            </div>
                        </div>
                        <div className="face face2 ">
                            <div className="content m-3">
                                <p>keep up with my daily work routine</p>
                                <a href="https://www.instagram.com/fz_perio/" className="mb-3" target="_blank">Follow Me!</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row></Container ></div>

    )
}

export default SocialCards
