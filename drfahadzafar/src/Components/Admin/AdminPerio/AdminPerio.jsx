import { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { FaTooth } from "react-icons/fa";
import PostForm from "../PostForm/PostForm";
import axios from "axios";
import EditForm from "../EditForm/EditForm";
import { GiTooth } from "react-icons/gi"
import PostModel from "../../Testpost/TestPost"




const AdminPerio = () => {
    const [perio, setPerio] = useState([]);
    const [endpoint, setEndpoint] = useState("/crown");
    const [postForm, setPostForm] = useState(false)
    const [editForm, setEditForm] = useState(false)

    useEffect(async () => {
        getPeiro()
    }, [endpoint]);

    const getPeiro = async () => {
        try {
            const data = await axios.get(`${process.env.REACT_APP_API_PERIO}${endpoint}`)

            console.log("data:", data);
            // const response = await data.json();
            setPerio(data.data);
            console.log("response:", perio);
        } catch (error) { }
    }

    const changeEndpoint = (e) => {
        e.preventDefault();
        const endpoint = e.target.value;
        console.log(endpoint);
        setEndpoint(endpoint);
    };



    const deleteItem = async (_id) => {
        // e.preventDefault();
        // const id = e.target.value;
        // console.log(id)
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_PERIO}${endpoint}/` + _id)
            if (response) {
                console.log('delete success')
                getPeiro()
            }


        } catch (error) {

            console.error("There was an error!", error);
        }
    };


    return (
        <div>
            <img
                src="../../../img/logo2.png"
                className="logo mb-4"
                alt=""
                width="200"
                height="200"
            />
            <div className="mb-4">
                <Button
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
                <Button variant="link">
                    <div>
                        <FaTooth />
                    </div>
                    Link
                </Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>image</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {perio.map((perioData, i) => (
                        <tr>
                            <td key={i}>{perioData._id}</td>
                            <td>{perioData.title}</td>
                            <td>{perioData.description}</td>
                            <img src={perioData.image} alt="" width="125px" height="75px" className="my-2" />
                            <td>
                                <Button
                                    key={i}
                                    variant="danger"
                                    className="mx-3"
                                    value={perioData._id}
                                    onClick={(e) => deleteItem(perioData._id)}
                                >
                                    <GiTooth />
                                </Button>
                                <Button variant="secondary" onClick={(e) => setEditForm(true)}> Edit</Button>
                            </td>
                        </tr>
                    ))}

                    <tr>
                        <td>Total Cases</td>
                        <td colSpan="2">50</td>
                        <td>
                            <Button variant="success" onClick={() => setPostForm(true)}> Add more</Button>


                        </td>
                    </tr>
                </tbody>
            </Table>

            <PostForm trigger={postForm} setTrigger={setPostForm} endpoint={endpoint}><h3>hello pop up</h3></PostForm>
            {/* <PostModel trigger={postForm} setTrigger={setPostForm} endpoint={endpoint}><h3>hello pop up</h3></PostModel> */}

            <EditForm trigger={editForm} setTrigger={setEditForm} endpoint={endpoint} id={perio._id} />

        </div>
    );
};

export default AdminPerio;
