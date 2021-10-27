import { Card, Container, Row, Col } from "react-bootstrap"
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"
import Jumbotron from "../Jumbotron/Jumbotron"

const Contacts = () => {
    return (
        <>
            <Jumbotron />
            <Container style={{ marginTop: '70px' }}>
                <h3>
                    Get in touch ...
                </h3>
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="../../img/profile.jpg" className="profile" />
                            <Card.Body>
                                <Card.Title>Contact here</Card.Title>
                                <Card.Text>
                                    <div>Clinic Address 1:
                                        via saponaro,24 milano ,itlay</div>
                                    <div>Clinic Address 1:
                                        via saponaro,24 milano ,itlay</div>
                                    <div>Mobile no : +39 351290000</div>
                                    <div>clinic no :+39020000000</div>
                                    <h5 className="mt-3"> Follow me for more!</h5>
                                    <a href="https://www.facebook.com/fahad.zafar.505 " target="_blank">   <FaFacebookF /></a>
                                    <a href="https://www.instagram.com/fz_perio/" target="_blank"> <FaInstagram /></a>

                                    <a href="https://www.linkedin.com/in/fahad-zafar-81b001179/" target="_blank"><FaLinkedin /></a>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <img src="http://www.overplace.com/files/jumbotron/82060/jumbo_82060_201901091558027a2b9c808a2581006e9e9fecd1f3047f.jpg" alt="" width="725px" height="600" />
                    </Col>
                </Row>

            </Container>
        </>
    )
}
export default Contacts