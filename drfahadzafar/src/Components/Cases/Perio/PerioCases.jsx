import "./perioCases.css"
import { Card, Button, Col, Row } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"
import { FaTooth } from "react-icons/fa";
import ReadMore from "./ReadMore/ReadMore"
import { Route } from "react-router-dom"
const PerioCases = () => {
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

            {/* <CasesNavbar value="/frenulectomy" /> */}
            <div className="mb-4">
                <Button
                    className="selected"
                    variant=""
                    className="btn-large"
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

            </div>
            <div class="card-img my-5">
                <Row>
                    {perio.map((perioData, i) =>
                        <Col md={3} className="m-5">
                            <div style={{ width: '' }} className="card-perio ">
                                <img variant="top" src={perioData.image} className="card-image" />
                                <Card.Body>
                                    <Card.Title>{perioData.title}</Card.Title>
                                    <Card.Text>
                                        {perioData.description}
                                    </Card.Text>
                                    <Button variant="" className="button" onClick={<ReadMore id={perioData._id} />} >Read More</Button>

                                </Card.Body>
                            </div></Col>)}


                </Row>
            </div>

        </>
    )



}
export default PerioCases

