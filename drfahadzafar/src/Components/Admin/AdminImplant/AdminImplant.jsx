import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap"
import { FaTooth } from "react-icons/fa"

const AdminImplant = () => {
    const [implant, setImplant] = useState([])
    const [endpoint, setEndpoint] = useState("/esthetic")
    useEffect(async () => {
        try {
            const data = await fetch(process.env.REACT_APP_API_IMPLANT + endpoint, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'

                },
            })
            console.log("data:", data)

            const response = await data.json()
            setImplant(response)
            console.log("response:", implant)
        } catch (error) {

        }

    }, [endpoint])

    const changeEndpoint = (e) => {
        e.preventDefault()
        const endpoint = e.target.value
        console.log(endpoint)
        setEndpoint(endpoint)
    }

    return (
        <div>
            <img src="../../../img/logo2.png" className="logo mb-4" alt="" width="200" height="200" />
            <div className="mb-4">
                <Button variant="primary" className="btn-large" value="/esthetic" onClick={e => changeEndpoint(e)}> <div><FaTooth /></div> Esthetic Problems Implants </Button>{' '}
                <Button variant="secondary" value="/guidedbone" onClick={e => changeEndpoint(e)}> <div><FaTooth /></div>Guided Bone Regeneration</Button>{' '}
                <Button variant="success" value="/Implantsurgery" onClick={e => changeEndpoint(e)}> <div><FaTooth /></div>Implant Surgery</Button>{' '}
                <Button variant="warning" value="/peri" onClick={e => changeEndpoint(e)}><div><FaTooth /></div>Peri Implantitis Treatment</Button>{' '}
                <Button variant="danger" value="/sinus" onClick={e => changeEndpoint(e)}><div><FaTooth /></div>Sinus Lift Procedure</Button>
                <Button variant="info" value="" onClick={e => changeEndpoint(e)}><div><FaTooth /></div>Periodontal Regenerative Surgery</Button>{' '}

                <Button variant="dark" value="/pocketelimination" onClick={e => changeEndpoint(e)}><div><FaTooth /></div>Pocket Elimination Surgery</Button>{' '}
                <Button variant="link"><div><FaTooth /></div>Link</Button>
            </div>
            <Table striped bordered hover>



                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {implant.map((implantData) => (
                        <tr>
                            <td>{implantData._id}</td>
                            <td>{implantData.title}</td>
                            <td>{implantData.description}</td>
                            <td><img src={implantData.image} alt="" width="30%" height="30px" /></td>
                            <td>
                                <Button variant="danger" className="mx-3"><FaTooth /></Button>
                                <Button variant="secondary"  > Edit</Button>

                            </td>
                        </tr>
                    ))}


                    <tr>
                        <td>Total Cases</td>
                        <td colSpan="2">50</td>
                        <td><Button variant="success"> Add more</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )





}

export default AdminImplant;