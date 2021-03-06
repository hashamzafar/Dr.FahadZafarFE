import { Card, Container, Row, Col } from "react-bootstrap"
import SocialCards from "../SocialCards/SocialCards"
import "./contact.scss"
const Contacts = () => {
    return (
        <>


            <Row className="justify-content-center py-5 card-background" >

                <Col sm={12} md={4}>

                    <Container >     <Card className="card">
                        <div className="card__image-container pt-4">
                            <img className="card__image" src="../../img/profile.jpg" alt="" />
                        </div>
                        <svg className="card__svg" viewBox="0 0 800 500">

                            <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                            <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                        </svg>

                        <div className="card__content">
                            <h1 className="card__title">Dr. Fahad Zafar</h1>
                            <h3>periodontal & implants Specialist</h3>
                            <p><div>Clinic Address 1:
                                via saponaro,24 milano ,itlay</div>
                                <div>Clinic Address 2:
                                    via saponaro,24 milano ,itlay</div>
                                <div>Mobile no : +39 351290000</div>
                                <div>clinic no :+39020000000</div></p>
                        </div>
                    </Card></Container>
                </Col>
                <Col sm={12} md={6}>
                    <SocialCards />
                </Col>
            </Row>


        </>
    )
}
export default Contacts