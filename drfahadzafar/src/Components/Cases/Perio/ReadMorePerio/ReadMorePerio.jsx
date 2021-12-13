import { useEffect, useState } from "react"
import axios from "axios"
import { Container, Row } from "react-bootstrap"
import "./style.css"
const ReadMore = (props) => {
    const [perio, setPerio] = useState([]);

    const [endpoint, setEndpoint] = useState("/crown");
    const endpoints = props.match.params.endpoint
    const getPeiro = async () => {
        try {
            const data = await axios.get(`${process.env.REACT_APP_API_PERIO}/${endpoints}/${props.match.params.id}`)

            console.log("data:", data);
            // const response = await data.json();
            setPerio(data.data);
            console.log("response:", perio);
        } catch (error) { }
    }
    useEffect(async () => {
        getPeiro()
    }, [endpoints]);
    const changeEndpoint = (e) => {
        e.preventDefault();
        const endpoint = e.target.value;
        console.log(endpoint);
        setEndpoint(endpoint);
    };
    return (
        <div className="">
            {/* // <Row> */}
            <img src={perio.image} alt="" className="img" />

            <h1>{perio.title}</h1>
            <Container>


                <p>{perio.description}</p></Container>
            {/* // </Row> */}
        </div>
    )
}
export default ReadMore