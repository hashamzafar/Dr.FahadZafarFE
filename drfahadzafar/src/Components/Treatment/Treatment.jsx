import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import "./treatment.scss"



const Treatment = () => {
    return (
        <>

            {/* style={{ hue: "220" }} */}
            <h3 className="my-5">Dental Treatments</h3>
            <Row>
                <Col xs={6} md={4} lg={3}>
                    <div class="flip-card-container">
                        <div class="flip-card">

                            <div class="card-front">
                                <figure>
                                    <div class="img-bg"></div>
                                    <img src="https://www.itjem.org/wp-content/uploads/2019/05/Selezione_044.png" alt="Brohm Lake" />
                                    <figcaption>CASE TYPE</figcaption>
                                </figure>

                                <ul>
                                    <li>CASE 1</li>
                                    {/* <li>Detail 2</li>
                                    <li>Detail 3</li>
                                    <li>Detail 4</li>
                                    <li>Detail 5</li> */}
                                </ul>
                            </div>

                            <div class="card-back">
                                <figure>
                                    <div class="img-bg"></div>
                                    <img src="https://www.itjem.org/wp-content/uploads/2019/05/Selezione_044.png" alt="Brohm Lake" />
                                </figure>
                                <div style={{ color: "white" }}>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Expedita doloribus,
                                    numquam dolores repellendus corporis aperiam corrupti,
                                    eos doloremque beatae cum autem at voluptatum veritatis labore
                                    ipsum! Consequuntur facilis blanditiis quia.</div>

                                <button>READ MORE</button>

                                <div class="design-container">
                                    <span class="design design--1"></span>
                                    <span class="design design--2"></span>
                                    <span class="design design--3"></span>
                                    <span class="design design--4"></span>
                                    <span class="design design--5"></span>
                                    <span class="design design--6"></span>
                                    <span class="design design--7"></span>
                                    <span class="design design--8"></span>
                                </div>
                            </div>

                        </div>
                    </div></Col>
                {/* style="--hue: 170 */}
                <Col xs={6} md={4} lg={3}>
                    <div class="flip-card-container" >
                        <div class="flip-card">

                            <div class="card-front">
                                <figure>
                                    <div class="img-bg"></div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hUzY9eXFt9b25c-q3WCwMJRtMRxyaRdxwd88MveYKlHvt1QmYa8l4b9ypm2itFQ44sc&usqp=CAU" alt="Image 2" />
                                    <figcaption>Case Type</figcaption>
                                </figure>

                                <ul>
                                    <li>CASE 2</li>

                                </ul>
                            </div>

                            <div class="card-back">
                                <figure>
                                    <div class="img-bg"></div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hUzY9eXFt9b25c-q3WCwMJRtMRxyaRdxwd88MveYKlHvt1QmYa8l4b9ypm2itFQ44sc&usqp=CAU" alt="image-2" />
                                </figure>

                                <div style={{ color: "white" }}>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Expedita doloribus,
                                    numquam dolores repellendus corporis aperiam corrupti,
                                    eos doloremque beatae cum autem at voluptatum veritatis labore
                                    ipsum! Consequuntur facilis blanditiis quia.</div>

                                <button>READ MORE</button>

                                <div class="design-container">
                                    <span class="design design--1"></span>
                                    <span class="design design--2"></span>
                                    <span class="design design--3"></span>
                                    <span class="design design--4"></span>
                                    <span class="design design--5"></span>
                                    <span class="design design--6"></span>
                                    <span class="design design--7"></span>
                                    <span class="design design--8"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </Col>
                {/* style="--hue: 350" */}
                <Col xs={6} md={4} lg={3}>
                    <div class="flip-card-container" >
                        <div class="flip-card">

                            <div class="card-front">
                                <figure>
                                    <div class="img-bg"></div>
                                    <img src="https://study.com/cimages/videopreview/videopreview-full/diseases-of-oral-cavity-tissues-terminology1_192620.jpg" alt="Brohm Lake" />
                                    <figcaption>Case Type</figcaption>
                                </figure>

                                <ul>

                                    <li>Case 3</li>

                                </ul>
                            </div>

                            <div class="card-back">

                                <figure>
                                    <div class="img-bg"></div>
                                    <img src="https://study.com/cimages/videopreview/videopreview-full/diseases-of-oral-cavity-tissues-terminology1_192620.jpg" alt="Brohm Lake" />
                                </figure>

                                <div style={{ color: "white" }}>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Expedita doloribus,
                                    numquam dolores repellendus corporis aperiam corrupti,
                                    eos doloremque beatae cum autem at voluptatum veritatis labore
                                    ipsum! Consequuntur facilis blanditiis quia.</div>

                                <button>READ MORE</button>


                                <div class="design-container">
                                    <span class="design design--1"></span>
                                    <span class="design design--2"></span>
                                    <span class="design design--3"></span>
                                    <span class="design design--4"></span>
                                    <span class="design design--5"></span>
                                    <span class="design design--6"></span>
                                    <span class="design design--7"></span>
                                    <span class="design design--8"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col xs={6} md={4} lg={3}>
                    <div class="flip-card-container" >
                        <div class="flip-card">

                            <div class="card-front">
                                <figure>
                                    <div class="img-bg"></div>
                                    <img src="https://o.quizlet.com/B1l6CHjwdpyrk5w6VCnGwg_b.png" alt="Brohm Lake" />
                                    <figcaption>Case Type</figcaption>
                                </figure>

                                <ul>
                                    <li>Case 4</li>

                                </ul>
                            </div>

                            <div class="card-back">

                                <figure>
                                    <div class="img-bg"></div>
                                    <img src="https://o.quizlet.com/B1l6CHjwdpyrk5w6VCnGwg_b.png" alt="Brohm Lake" />
                                </figure>

                                <div style={{ color: "white" }}>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Expedita doloribus,
                                    numquam dolores repellendus corporis aperiam corrupti,
                                    eos doloremque beatae cum autem at voluptatum veritatis labore
                                    ipsum! Consequuntur facilis blanditiis quia.</div>

                                <button>READ MORE</button>


                                <div class="design-container">
                                    <span class="design design--1"></span>
                                    <span class="design design--2"></span>
                                    <span class="design design--3"></span>
                                    <span class="design design--4"></span>
                                    <span class="design design--5"></span>
                                    <span class="design design--6"></span>
                                    <span class="design design--7"></span>
                                    <span class="design design--8"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
            {/* <div >
                <Row className="justify-content-center mr-5">
                    <Col xs={6} md={4} lg={3}>

                        <div style={{ width: '20rem', height: "25rem" }} className=" bg-color cards">
                            <Card.Img variant="top" className="card-icon" width="40px" src="https://spng.pngfind.com/pngs/s/364-3646811_adriana-coscarelli-icono-dentista-png-transparent-png.png" />
                            <Card.Body className="mt-2">
                                <Card.Title className="title-color mt-3">Implant Dentisty</Card.Title>
                                <Card.Text>
                                    If you’re living with a missing tooth but want something more permanent than dentures or a bridge, a dental implant could be the safe and secure solution you’re looking for..
                                </Card.Text>
                                <Button variant="" className="btn-color">Learn More</Button>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <div style={{ width: '20rem', height: "25rem" }} className=" bg-color cards">
                            <Card.Img variant="top" className="card-icon" width="40px" src="https://spng.pngfind.com/pngs/s/364-3646811_adriana-coscarelli-icono-dentista-png-transparent-png.png" />
                            <Card.Body className="mt-2">
                                <Card.Title className="title-color mt-3">Perio</Card.Title>
                                <Card.Text >
                                    They say a smile is the best thing you can wear and they’re right!We all deserve to feel confident about our teeth when we smile or when we’re eating in public..
                                </Card.Text>
                                <Button variant="" className="btn-color">Learn More</Button>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <div style={{ width: '20rem', height: "25rem" }} className="bg-color cards">
                            <Card.Img variant="top" className="card-icon" width="40px" src="https://spng.pngfind.com/pngs/s/364-3646811_adriana-coscarelli-icono-dentista-png-transparent-png.png" />
                            <Card.Body className="mt-2">
                                <Card.Title className="title-color mt-3">Perio</Card.Title>
                                <Card.Text >
                                    They say a smile is the best thing you can wear and they’re right!We all deserve to feel confident about our teeth when we smile or when we’re eating in public..
                                </Card.Text>
                                <Button variant="" className="btn-color">Learn More</Button>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <div style={{ width: '20rem', height: "25rem" }} className=" bg-color cards">
                            <Card.Img variant="top" className="card-icon " width="30px" src="https://spng.pngfind.com/pngs/s/364-3646811_adriana-coscarelli-icono-dentista-png-transparent-png.png" />
                            <Card.Body className="mt-2">
                                <Card.Title className="title-color mt-3">Perio</Card.Title>
                                <Card.Text >
                                    They say a smile is the best thing you can wear and they’re right!We all deserve to feel confident about our teeth when we smile or when we’re eating in public..
                                </Card.Text>
                                <Button variant="" className="btn-color">Learn More</Button>
                            </Card.Body>
                        </div>
                    </Col>
                    {/* <Col xs={6} md={4} lg={2}>
                        <div style={{ width: '14rem', height: "25rem" }} className=" bg-color cards">
                            <Card.Img variant="top" className="card-icon" width="40px" src="https://spng.pngfind.com/pngs/s/364-3646811_adriana-coscarelli-icono-dentista-png-transparent-png.png" />
                            <Card.Body className="mt-2">
                                <Card.Title className="title-color mt-3">Perio</Card.Title>
                                <Card.Text >
                                    They say a smile is the best thing you can wear and they’re right! We all deserve to feel confident about our teeth when we smile or when we’re eating in public..
                                </Card.Text>
                                <Button variant="" className="btn-color">Learn More</Button>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <div style={{ width: '14rem', height: "25rem" }} className=" bg-color cards">
                            <Card.Img variant="top" className="card-icon" width="40px" src="https://spng.pngfind.com/pngs/s/364-3646811_adriana-coscarelli-icono-dentista-png-transparent-png.png" />
                            <Card.Body className="mt-2">
                                <Card.Title className="title-color mt-3">Perio</Card.Title>
                                <Card.Text >
                                    They say a smile is the best thing you can wear and they’re right! We all deserve to feel confident about our teeth when we smile or when we’re eating in public..
                                </Card.Text>
                                <Button variant="" className="btn-color">Learn More</Button>
                            </Card.Body> */}
            {/* </div>
        </Col> */}
            {/* </Row >
            </div >  */}

        </>
    )
}

export default Treatment