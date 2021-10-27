import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap"
import { FaTooth } from "react-icons/fa"

const AdminPerio = () => {
    const [crown, setCrown] = useState([])
    useEffect(async () => {
        try {
            const data = await fetch(process.env.REACT_APP_API_URL + "/crown", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'

                },
            })
            console.log("data:", data)

            const response = await data.json()
            setCrown(response)
            console.log("response:", crown)
        } catch (error) {

        }



    }, [])

    return (
        <div>
            <img src="../../../img/logo2.png" className="logo mb-4" alt="" width="200" height="200" />
            <div className="mb-4">
                <Button variant="primary" className="btn-large" > <div><FaTooth /></div> Crown Lengthe Surgery </Button>{' '}
                <Button variant="secondary"  > <div><FaTooth /></div>Frenulectomy</Button>{' '}
                <Button variant="success"> <div><FaTooth /></div>Gum Plastic Surgery</Button>{' '}
                <Button variant="warning"><div><FaTooth /></div>Impacted Canine Exposure</Button>{' '}
                <Button variant="danger"><div><FaTooth /></div>Non Surgical Therapy</Button>
                <Button variant="info"><div><FaTooth /></div>Periodontal Regenerative Surgery</Button>{' '}

                <Button variant="dark"><div><FaTooth /></div>Pocket Elimination Surgery</Button>{' '}
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
                    {crown.map((crownData) => (
                        <tr>
                            <td>{crownData._id}</td>
                            <td>{crownData.title}</td>
                            <td>{crownData.description}</td>
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

export default AdminPerio;

