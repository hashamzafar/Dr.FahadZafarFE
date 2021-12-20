import "./mainCard.scss"
import { Container, Row, Col } from "react-bootstrap"
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"




const MainCard = () => {
    return (
        <>
            <div className="card-background">
                <h1 className="text mt-5">Courses & Lecturing</h1>
                <Container >
                    <Row  >
                        <Col sm={12} md={4} >
                            <div className="cards">
                                <div className="face face1">
                                    <div className="content">
                                        <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                                        <h3>Courses</h3>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content">
                                        <p>Upcoming courses starting soon...</p>
                                        {/* <a href="#">Read More</a> */}
                                    </div>
                                </div>
                            </div></Col>
                        <Col md={4}></Col>
                        <Col sm={12} md={4}>
                            <div class="cards">
                                <div className="face face1">
                                    <div className="content">
                                        <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                                        <h3>Lecturing</h3>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content">
                                        <p>Keep learning, stay aware of future lectures...</p>
                                    </div>
                                </div>
                            </div></Col>
                    </Row>
                </Container>
                <div className="social-container">
                    <span>
                        <a href="https://twitter.com/" target="_blank"  >
                            <FaFacebookF className="social fb" />
                        </a></span>
                    <span>
                        <a href="https://www.linkedin.com/in/" target="_blank"  >
                            <FaLinkedin className="social" />
                        </a>
                    </span>

                    <span>
                        <a href="https://codepen.io/" target="_blank"  >
                            <FaInstagram className="social ins" />
                        </a>
                    </span>
                </div>

            </div >
        </>
    )
}

export default MainCard