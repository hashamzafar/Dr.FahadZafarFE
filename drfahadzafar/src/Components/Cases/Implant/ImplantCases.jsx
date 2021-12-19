
import { Button, Col, Row, Container, Navbar, Nav } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"
import { FaTooth } from "react-icons/fa";
import "./implantCases.css"
import "../../MainCard/mainCard.scss"

const ImplantCases = ({ history }) => {
    const [implant, setImplant] = useState([]);
    const [endpoint, setEndpoint] = useState("/esthetic");
    const getImplant = async () => {
        try {
            const data = await axios.get(`${process.env.REACT_APP_API_IMPLANT}${endpoint}`)

            console.log("data:", data);
            // const response = await data.json();
            setImplant(data.data);
            console.log("response:", implant);
        } catch (error) { }
    }
    useEffect(async () => {
        getImplant()
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
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        {/* <Nav.Link value="/crown"
                            onClick={(e) => changeEndpoint(e)}>   <Button
                                className="selected"
                                variant=""

                                value="/crown"
                                onClick={(e) => changeEndpoint(e)}
                                className="navlink"
                            >
                                Crown Lengthe Surgery{" "}
                            </Button>
                        </Nav.Link> */}
                        <Nav.Link >  <Button variant="" className="navlink" value="/guidedbone" onClick={e => changeEndpoint(e)}> Guided Bone Regeneration</Button>{' '}</Nav.Link>
                        <Nav.Link >   <Button variant="" className="navlink" value="/implantsurgery" onClick={e => changeEndpoint(e)}> Implant Surgery</Button>{' '}</Nav.Link>
                        <Nav.Link >    <Button variant="" className="navlink" value="/peri" onClick={e => changeEndpoint(e)}>Peri Implantitis Treatment</Button>{' '}</Nav.Link>
                        <Nav.Link > <Button variant="" className="navlink" value="/esthetic" onClick={e => changeEndpoint(e)}>  Esthetic Problems Implants </Button>{' '}</Nav.Link>
                        <Nav.Link >        <Button variant="" className="navlink" value="/sinus" onClick={e => changeEndpoint(e)}>Sinus Lift Procedure</Button></Nav.Link>
                        {/* <Nav.Link >  <Button
                            variant="link"
                            value="/periodontal"
                            onClick={(e) => changeEndpoint(e)}
                            className="navlink"
                        >

                            Periodontal Regenerative Surgery
                        </Button>{" "}</Nav.Link> */}
                        {/* <Nav.Link>  <Button
                            variant=""
                            value="/pocketelimination"
                            onClick={(e) => changeEndpoint(e)}
                            className="navlink"
                        >

                            Pocket Elimination Surgery
                        </Button>{" "}</Nav.Link> */}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <Row className="cardBg d-flex justify-content-center">

                {/* <div className="mb-4">
                    <nav className="navbar ">



                        <Button variant="" className="BT" value="/guidedbone" onClick={e => changeEndpoint(e)}> <div><FaTooth /></div>Guided Bone Regeneration</Button>{' '}

                        <Button variant="" className="BT" value="/implantsurgery" onClick={e => changeEndpoint(e)}> <div><FaTooth /></div>Implant Surgery</Button>{' '}

                        <Button variant="" className="BT" value="/peri" onClick={e => changeEndpoint(e)}><div><FaTooth /></div>Peri Implantitis Treatment</Button>{' '}


                        <Button variant="" className="BT" value="/esthetic" onClick={e => changeEndpoint(e)}> <div><FaTooth /></div> Esthetic Problems Implants </Button>{' '}

                        <Button variant="" className="BT" value="/sinus" onClick={e => changeEndpoint(e)}><div><FaTooth /></div>Sinus Lift Procedure</Button>

                    </nav>

                </div> */}

                <div >
                    <Row className="ml-0" >
                        {implant.map((implantData, i) =>
                            <>

                                <Col sm={12} md={4} lg={3} className=""><Container  >
                                    <div className="cards ">
                                        <div className="face face1">
                                            <div className="content">
                                                <img src={implantData.image} />
                                                <h3>{implantData.title}</h3>
                                            </div>
                                        </div>
                                        <div className="face face2">
                                            <div className="content">
                                                <p>{implantData.description.slice(0, 100)}</p>
                                                {/* <a href="/read">Read More</a> */}
                                                <Button variant="info" className="readMore" onClick={() => history.push("/read" + endpoint + "/" + implantData._id)}>read more</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Container >
                                </Col>


                            </>
                        )
                        }
                    </Row >    </div>


            </Row >


        </>
    )



}
export default ImplantCases

