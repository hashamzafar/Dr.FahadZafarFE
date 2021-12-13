
import { Button, Col, Row, Container } from "react-bootstrap"
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





            <Row className="cardBg d-flex justify-content-center">

                <div className="mb-4">
                    <nav className="navbar ">



                        <Button variant="" className="BT" value="/guidedbone" onClick={e => changeEndpoint(e)}> <div><FaTooth /></div>Guided Bone Regeneration</Button>{' '}

                        <Button variant="" className="BT" value="/implantsurgery" onClick={e => changeEndpoint(e)}> <div><FaTooth /></div>Implant Surgery</Button>{' '}

                        <Button variant="" className="BT" value="/peri" onClick={e => changeEndpoint(e)}><div><FaTooth /></div>Peri Implantitis Treatment</Button>{' '}


                        <Button variant="" className="BT" value="/esthetic" onClick={e => changeEndpoint(e)}> <div><FaTooth /></div> Esthetic Problems Implants </Button>{' '}

                        <Button variant="" className="BT" value="/sinus" onClick={e => changeEndpoint(e)}><div><FaTooth /></div>Sinus Lift Procedure</Button>

                    </nav>

                </div>

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
                                                <p>{implantData.description}</p>
                                                {/* <a href="/read">Read More</a> */}
                                                <Button variant="info" onClick={() => history.push("/read" + endpoint + "/" + implantData._id)}>read more</Button>
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

