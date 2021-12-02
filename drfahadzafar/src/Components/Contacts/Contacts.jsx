import { Card, Container, Row, Col } from "react-bootstrap"
// import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import SocialCards from "../SocialCards/SocialCards"
// import { FaFacebookF } from "react-icons/fa"
import "./contact.scss"
const Contacts = () => {
    return (
        <>

            <Container className=" ">
                <Row>

                    <Col sm={12} md={5}>

                        <Card className="card">
                            <div className="card__image-container">
                                <img className="card__image" src="../../img/profile.jpg" alt="" />
                            </div>
                            <svg className="card__svg" viewBox="0 0 800 500">

                                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                                <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                            </svg>

                            <div className="card__content">
                                <h1 classN="card__title">Dr. Fahad Zafar</h1>
                                <h3>periodontal & implants Specialist</h3>
                                <p><div>Clinic Address 1:
                                    via saponaro,24 milano ,itlay</div>
                                    <div>Clinic Address 2:
                                        via saponaro,24 milano ,itlay</div>
                                    <div>Mobile no : +39 351290000</div>
                                    <div>clinic no :+39020000000</div></p>
                            </div>
                        </Card>
                    </Col>
                    <Col sm={12} md={7}>
                        <SocialCards />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Contacts