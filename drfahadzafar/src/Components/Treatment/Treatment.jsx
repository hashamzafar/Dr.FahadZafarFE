import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import "./style.css"



const Treatment = () => {
    return (
        <>
            <h3 className="my-5">Dental Treatments</h3>
            <Container>
                <div>
                    <Row>
                        <Col xs={12} md={6} lg={3}>

                            <Card style={{ width: '15rem', height: "25rem" }} className="my-3 bg-color">
                                <Card.Img variant="top" className="card-icon" width="40px" src="https://spng.pngfind.com/pngs/s/364-3646811_adriana-coscarelli-icono-dentista-png-transparent-png.png" />
                                <Card.Body className="mt-5">
                                    <Card.Title className="title-color mt-3">Implant Dentisty</Card.Title>
                                    <Card.Text>
                                        If you’re living with a missing tooth but want something more permanent than dentures or a bridge, a dental implant could be the safe and secure solution you’re looking for..
                                    </Card.Text>
                                    <Button variant="" className="btn-color">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Card style={{ width: '15rem', height: "25rem" }} className="my-3 bg-color">
                                <Card.Img variant="top" className="card-icon" width="40px" src="https://spng.pngfind.com/pngs/s/364-3646811_adriana-coscarelli-icono-dentista-png-transparent-png.png" />
                                <Card.Body className="mt-5">
                                    <Card.Title className="title-color mt-3">Perio</Card.Title>
                                    <Card.Text >
                                        They say a smile is the best thing you can wear and they’re right! We all deserve to feel confident about our teeth when we smile or when we’re eating in public..
                                    </Card.Text>
                                    <Button variant="" className="btn-color">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Card style={{ width: '15rem', height: "25rem" }} className="my-3 bg-color">
                                <Card.Img variant="top" className="card-icon" width="40px" src="https://spng.pngfind.com/pngs/s/364-3646811_adriana-coscarelli-icono-dentista-png-transparent-png.png" />
                                <Card.Body className="mt-5">
                                    <Card.Title className="title-color mt-3">Perio</Card.Title>
                                    <Card.Text >
                                        They say a smile is the best thing you can wear and they’re right! We all deserve to feel confident about our teeth when we smile or when we’re eating in public..
                                    </Card.Text>
                                    <Button variant="" className="btn-color">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Card style={{ width: '15rem', height: "25rem" }} className="my-3 bg-color">
                                <Card.Img variant="top" className="card-icon" width="40px" src="https://spng.pngfind.com/pngs/s/364-3646811_adriana-coscarelli-icono-dentista-png-transparent-png.png" />
                                <Card.Body className="mt-5">
                                    <Card.Title className="title-color mt-3">Perio</Card.Title>
                                    <Card.Text >
                                        They say a smile is the best thing you can wear and they’re right! We all deserve to feel confident about our teeth when we smile or when we’re eating in public..
                                    </Card.Text>
                                    <Button variant="" className="btn-color">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Treatment