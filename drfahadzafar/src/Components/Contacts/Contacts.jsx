import { Card, Container, Row, Col } from "react-bootstrap"
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import SocialCards from "../SocialCards/SocialCards"
// import { FaFacebookF } from "react-icons/fa"
import "./contact.scss"
const Contacts = () => {
    return (
        <>

            <Container class="container">
                <Row>
                    <Col md={6}>

                        <Card class="card mt-4">
                            <div class="card__image-container">
                                <img class="card__image mt-3" src="../../img/profile.jpg" alt="" />
                            </div>
                            <svg class="card__svg" viewBox="0 0 800 500">

                                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                                <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                            </svg>

                            <div class="card__content">
                                <h1 class="card__title">Dr. Fahad Zafar</h1>
                                <h3>periodontal & implants Specialist</h3>
                                <p><div>Clinic Address 1:
                                    via saponaro,24 milano ,itlay</div>
                                    <div>Clinic Address 1:
                                        via saponaro,24 milano ,itlay</div>
                                    <div>Mobile no : +39 351290000</div>
                                    <div>clinic no :+39020000000</div></p>
                            </div>
                        </Card></Col>
                    <Col md={4}>
                        <SocialCards />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Contacts