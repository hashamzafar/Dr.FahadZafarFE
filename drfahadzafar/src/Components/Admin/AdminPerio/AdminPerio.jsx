import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import PostForm from "./PostForm/PostForm";
import axios from "axios";
import { RiArrowGoBackFill } from "react-icons/ri"
import { withRouter } from "react-router-dom";
import "./style.css"


const AdminPerio = ({ history }) => {
    const [perio, setPerio] = useState([]);
    const [endpoint, setEndpoint] = useState("/crown");
    const [postForm, setPostForm] = useState(false)
    // const [editForm, setEditForm] = useState(false)
    const [data, setData] = useState()

    useEffect(async () => {
        getPerio()
    }, [endpoint]);

    const passing = () => {
        setData(perio)
    }


    const getPerio = async () => {
        try {
            const data = await axios.get(`${process.env.REACT_APP_API_PERIO}${endpoint}`)
            setPerio(data.data);
            console.log("response:", perio);
        } catch (error) { }
    }

    const changeEndpoint = (e) => {
        e.preventDefault();
        const endpoint = e.target.value;
        setEndpoint(endpoint);
    };

    const deleteItem = async (_id) => {

        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_PERIO}${endpoint}/` + _id)
            if (response) {
                console.log('delete success')
                getPerio()
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
            <div className="mb-4 ">
                <Button
                    variant=""
                    className="btn-large"
                    value="/crown"
                    onClick={(e) => changeEndpoint(e)}
                    className="navlink mx-3"
                >

                    Crown Lengthe Surgery
                </Button>
                <Button
                    variant=""
                    value="/frenulectomy"
                    onClick={(e) => changeEndpoint(e)}
                    className="navlink mx-3"
                >


                    Frenulectomy
                </Button>
                <Button
                    variant=""
                    value="/gum"
                    onClick={(e) => changeEndpoint(e)}
                    className="navlink mx-3"
                >


                    Gum Plastic Surgery
                </Button>
                <Button
                    variant=""
                    value="/canine"
                    onClick={(e) => changeEndpoint(e)}
                    className="navlink mx-3"
                >

                    Impacted Canine Exposure
                </Button>
                <Button
                    variant=""
                    value="/nonsurgical"
                    onClick={(e) => changeEndpoint(e)}
                    className="navlink mx-3"
                >

                    Non Surgical Therapy
                </Button>
                <Button
                    variant=""
                    value="/periodontal"
                    onClick={(e) => changeEndpoint(e)}
                    className="navlink  mx-3"
                >

                    Periodontal Regenerative Surgery
                </Button>
                <Button
                    variant=""
                    value="/pocketelimination"
                    onClick={(e) => changeEndpoint(e)}
                    className="navlink mx-3"
                >

                    Pocket Elimination Surgery
                </Button>
                <Button variant="" href="/admin" className="navlink mx-3">
                    <RiArrowGoBackFill />
                    Go Back
                </Button>
            </div>

            <div>
                <button className="btn" onClick={() => setPostForm(true)}>
                    <span className="todo">Add More Article</span>

                    <span className="function">Add More</span>
                </button>
                <div>
                    {perio.map((perioData, i) => (

                        <div className="my-5">
                            <div id="container">

                                <div className="product-details mx-5">

                                    <h1 className="d-flex justify-content-center">{perioData.title}</h1>

                                    <p className="information">{perioData.description}</p>

                                </div>

                                <div className="product-image">

                                    <img src={perioData.image} alt="" className="mt-5" />


                                    <div className="info">
                                        <h2> {perioData.title}</h2>
                                        <p className="ml-2">id :{perioData._id}</p>

                                        <button className="btn" onClick={() => { history.push("/edit" + endpoint + "/" + perioData._id) }}>
                                            <span className="todo">to edit</span>

                                            <span className="function">Edit</span>
                                        </button>
                                        <div>
                                            <button className="btn delete mt-3" value={perioData._id} onClick={() => deleteItem(perioData._id)} >
                                                <span className="todo">to remove</span>

                                                <span className="function">Delete</span>
                                            </button></div>
                                    </div>
                                </div>

                            </div>

                        </div>






                    ))}
                </div>
            </div>

            <PostForm trigger={postForm} getPerio={getPerio} setTrigger={setPostForm} endpoint={endpoint}><h3>hello pop up</h3></PostForm>


        </div>
    );
};

export default withRouter(AdminPerio);
