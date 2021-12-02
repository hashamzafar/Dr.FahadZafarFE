import { useEffect, useState } from "react"
import axios from "axios"

const ReadMoreImplant = (props) => {
    const [implant, setImplant] = useState([]);

    const [endpoint, setEndpoint] = useState("/esthetic");
    const endpoints = props.match.params.endpoint
    const getImplant = async () => {
        try {
            const data = await axios.get(`${process.env.REACT_APP_API_IMPLANT}/${endpoints}/${props.match.params.id}`)

            console.log("data:", data);
            // const response = await data.json();
            setImplant(data.data);
            console.log("response:", implant);
        } catch (error) { }
    }
    useEffect(async () => {
        getImplant()
    }, [endpoints]);
    const changeEndpoint = (e) => {
        e.preventDefault();
        const endpoint = e.target.value;
        console.log(endpoint);
        setEndpoint(endpoint);
    };
    return (
        <>
            <img src={implant.image} alt="" />
            <h1>{implant.title}</h1>
            <p>{implant.description}</p>

        </>
    )
}
export default ReadMoreImplant