// import "./perioCases.css"
import { Button, Col, Row, Container, Navbar, Nav } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"
import "../../MainCard/mainCard.scss"
import "./style.css"
const PerioCases = ({ history }) => {
    const [perio, setPerio] = useState([]);
    const [endpoint, setEndpoint] = useState("/crown");
    const getPeiro = async () => {
        try {
            const data = await axios.get(`${process.env.REACT_APP_API_PERIO}${endpoint}`)

            console.log("data:", data);
            // const response = await data.json();
            setPerio(data.data);
            console.log("response:", perio);
        } catch (error) { }
    }
    useEffect(async () => {
        getPeiro()
    }, [endpoint]);
    const changeEndpoint = (e) => {
        e.preventDefault();
        const endpoint = e.target.value;
        console.log(endpoint);
        setEndpoint(endpoint);
    };




    return (
        <>

            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <Nav.Link value="/crown"
                            onClick={(e) => changeEndpoint(e)}>   <Button
                                className="selected"
                                variant=""

                                value="/crown"
                                onClick={(e) => changeEndpoint(e)}
                                className="navlink"
                            >
                                Crown Lengthe Surgery{" "}
                            </Button>
                        </Nav.Link>
                        <Nav.Link >  <Button
                            variant=""
                            value="/frenulectomy"
                            onClick={(e) => changeEndpoint(e)}
                            className="navlink"
                        >
                            {" "}

                            Frenulectomy
                        </Button>{" "}</Nav.Link>
                        <Nav.Link >   <Button
                            variant=""
                            value="/gum"
                            onClick={(e) => changeEndpoint(e)}
                            className="navlink"
                        >
                            {" "}


                            Gum Plastic Surgery
                        </Button>{" "}</Nav.Link>
                        <Nav.Link >     <Button
                            variant=""
                            value="/canine"
                            onClick={(e) => changeEndpoint(e)}
                            className="navlink"
                        >

                            Impacted Canine Exposure
                        </Button>{" "}</Nav.Link>
                        <Nav.Link > <Button
                            variant=""
                            value="/nonsurgical"
                            onClick={(e) => changeEndpoint(e)}
                            className="navlink"
                        >

                            Non Surgical Therapy
                        </Button></Nav.Link>
                        <Nav.Link >         <Button
                            variant=""
                            value="/nonsurgical"
                            onClick={(e) => changeEndpoint(e)}
                            className="navlink"
                        >

                            Non Surgical Therapy
                        </Button></Nav.Link>
                        <Nav.Link >  <Button
                            variant="link"
                            value="/periodontal"
                            onClick={(e) => changeEndpoint(e)}
                            className="navlink"
                        >

                            Periodontal Regenerative Surgery
                        </Button>{" "}</Nav.Link>
                        <Nav.Link>  <Button
                            variant=""
                            value="/pocketelimination"
                            onClick={(e) => changeEndpoint(e)}
                            className="navlink"
                        >

                            Pocket Elimination Surgery
                        </Button>{" "}</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>



            <Row className="cardBg ml-0 mx-0">
                {perio.map((perioData, i) =>
                    <>
                        <Col sm={12} md={4} lg={3}><Container>
                            <div className="cards ">
                                <div className="face face1">
                                    <div className="content">
                                        <img src={perioData.image} />
                                        <h3>{perioData.title}</h3>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content">
                                        <p>{perioData.description.slice(0, 100)}</p>

                                        <Button variant="info" className="readMore" onClick={() => history.push("/read" + endpoint + "/" + perioData._id)}>Read More</Button>
                                    </div>
                                </div>
                            </div>

                        </Container> </Col>


                    </>
                )
                }


            </Row>


        </>
    )



}
export default PerioCases

