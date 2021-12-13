// import "./perioCases.css"
import { Card, Button, Col, Row, Container, Navbar, Nav } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"
import { FaTooth } from "react-icons/fa";
import ReadMore from "./ReadMorePerio/ReadMorePerio"
import { Route } from "react-router-dom"
import "../../MainCard/mainCard.scss"
import { withRouter } from "react-router-dom";
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
            {/* <div className="mb-4"> */}
            <Navbar bg="light" expand="lg">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
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
            {/* <nav className="navbar ">

                <Button
                    className="selected"
                    variant=""

                    value="/crown"
                    onClick={(e) => changeEndpoint(e)}
                >
                    {" "}
                    <div>
                        <FaTooth />
                    </div>{" "}
                    Crown Lengthe Surgery{" "}
                </Button>{" "}
                <Button
                    variant=""
                    value="/frenulectomy"
                    onClick={(e) => changeEndpoint(e)}
                >
                    {" "}
                    <div>
                        <FaTooth />
                    </div>
                    Frenulectomy
                </Button>{" "}
                <Button
                    variant=""
                    value="/gum"
                    onClick={(e) => changeEndpoint(e)}
                >
                    {" "}
                    <div>
                        <FaTooth />
                    </div>
                    Gum Plastic Surgery
                </Button>{" "}
                <Button
                    variant=""
                    value="/canine"
                    onClick={(e) => changeEndpoint(e)}
                >
                    <div>
                        <FaTooth />
                    </div>
                    Impacted Canine Exposure
                </Button>{" "}
                <Button
                    variant=""
                    value="/nonsurgical"
                    onClick={(e) => changeEndpoint(e)}
                >
                    <div>
                        <FaTooth />
                    </div>
                    Non Surgical Therapy
                </Button>
                <Button
                    variant=""
                    value="/periodontal"
                    onClick={(e) => changeEndpoint(e)}
                >
                    <div>
                        <FaTooth />
                    </div>
                    Periodontal Regenerative Surgery
                </Button>{" "}
                <Button
                    variant=""
                    value="/pocketelimination"
                    onClick={(e) => changeEndpoint(e)}
                >
                    <div>
                        <FaTooth />
                    </div>
                    Pocket Elimination Surgery
                </Button>{" "}

            </nav> </div> */}

            {/* <CasesNavbar value="/frenulectomy" /> */}


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
                                        {/* <a href="/read">Read More</a> */}
                                        <Button variant="info" onClick={() => history.push("/read" + endpoint + "/" + perioData._id)}>read more</Button>
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

