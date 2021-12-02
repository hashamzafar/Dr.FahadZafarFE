import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap"
import { FaTooth } from "react-icons/fa"
import { axios } from "axios"
import PostForm from "./PostForm/PostForm"

const AdminImplant = () => {
    const [implant, setImplant] = useState([])
    const [endpoint, setEndpoint] = useState("/esthetic")
    const [postForm, setPostForm] = useState(false)

    useEffect(async () => {
        getImplant()
    }, [endpoint]);

    const getImplant = async () => {
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

    }

    const changeEndpoint = (e) => {
        e.preventDefault()
        const endpoint = e.target.value
        console.log(endpoint)
        setEndpoint(endpoint)
    }
    const deleteItem = async (_id) => {
        // e.preventDefault();
        // const id = e.target.value;
        // console.log(id)
        try {
            const response = await fetch(`${process.env.REACT_APP_API_IMPLANT}${endpoint}/${_id}`, {
                method: 'DELETE'
            })
            if (response) {
                console.log('delete success')
                getImplant()
            }


        } catch (error) {

            console.error("There was an error!", error);
        }
    };

    return (
        <div>
            <img src="../../../img/logo2.png" className="logo mb-4" alt="" width="200" height="200" />
            <div className="mb-4">
                <Button variant="" className="btn-large" value="/esthetic" onClick={e => changeEndpoint(e)}> <div><FaTooth /></div> Esthetic Problems Implants </Button>{' '}
                <Button variant="" value="/guidedbone" onClick={e => changeEndpoint(e)}> <div><FaTooth /></div>Guided Bone Regeneration</Button>{' '}
                <Button variant="" value="/implantsurgery" onClick={e => changeEndpoint(e)}> <div><FaTooth /></div>Implant Surgery</Button>{' '}
                <Button variant="" value="/peri" onClick={e => changeEndpoint(e)}><div><FaTooth /></div>Peri Implantitis Treatment</Button>{' '}
                <Button variant="" value="/sinus" onClick={e => changeEndpoint(e)}><div><FaTooth /></div>Sinus Lift Procedure</Button>



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
                    {implant.map((implantData, i) => (
                        <tr>
                            <td key={i}>{implantData._id}</td>
                            <td>{implantData.title}</td>
                            <td>{implantData.description}</td>
                            <td><img src={implantData.image} alt="" width="30%" height="30px" /></td>
                            <td>
                                <Button key={i}
                                    variant="danger"
                                    className="mx-3"
                                    value={implantData._id}
                                    onClick={() => deleteItem(implantData._id)} ><FaTooth /></Button>
                                <Button variant="secondary"  > Edit</Button>

                            </td>
                        </tr>
                    ))}


                    <tr>
                        <td>Total Cases</td>
                        <td colSpan="2">50</td>
                        <td> <Button variant="success" onClick={() => setPostForm(true)}> Add more</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <PostForm trigger={postForm} getImplant={getImplant} setTrigger={setPostForm} endpoint={endpoint}><h3>hello pop up</h3></PostForm>
        </div>
    )





}

export default AdminImplant;