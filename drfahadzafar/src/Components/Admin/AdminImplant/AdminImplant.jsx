import { useEffect, useState } from "react";
import { Button } from "react-bootstrap"

import PostForm from "./PostForm/PostForm"
import { RiArrowGoBackFill } from "react-icons/ri"
const AdminImplant = ({ history }) => {
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
                <Button variant="" className="navlink mx-3" value="/esthetic" onClick={e => changeEndpoint(e)}>  Esthetic Problems Implants </Button>{' '}
                <Button variant="" className="navlink mx-3" value="/guidedbone" onClick={e => changeEndpoint(e)}> Guided Bone Regeneration</Button>{' '}
                <Button variant="" className="navlink mx-3" value="/implantsurgery" onClick={e => changeEndpoint(e)}> Implant Surgery</Button>{' '}
                <Button variant="" className="navlink mx-3" value="/peri" onClick={e => changeEndpoint(e)}>Peri Implantitis Treatment</Button>{' '}
                <Button variant="" className="navlink mx-3" value="/sinus" onClick={e => changeEndpoint(e)}>Sinus Lift Procedure</Button>
                <Button variant="" href="/admin" className="navlink mx-3">
                    <RiArrowGoBackFill />
                    Go Back
                </Button>



            </div>
            <button className="btn" onClick={() => setPostForm(true)}>
                <span className="todo">Add More Article</span>

                <span className="function">Add More</span>
            </button>
            {implant.map((implantData, i) => (<div className="my-5">






                <div id="container">

                    <div className="product-details mx-5">

                        <h1 className="d-flex justify-content-center">{implantData.title}</h1>

                        <p className="information">{implantData.description}</p>

                    </div>

                    <div className="product-image">

                        <img src={implantData.image} alt="" className="mt-5" />


                        <div className="info">
                            <h2> {implantData.title}</h2>
                            <p className="ml-2">id :{implantData._id}</p>

                            <button className="btn" onClick={() => { history.push("/edit/implant" + endpoint + "/" + implantData._id) }}>
                                <span className="todo">to edit</span>

                                <span className="function">Edit</span>
                            </button>
                            <div>
                                <button className="btn delete mt-3" value={implantData._id} onClick={() => deleteItem(implantData._id)} >
                                    <span className="todo">to remove</span>

                                    <span className="function">Delete</span>
                                </button></div>
                        </div>
                    </div>

                </div>

            </div>))}

            <PostForm trigger={postForm} getImplant={getImplant} setTrigger={setPostForm} endpoint={endpoint}><h3>hello pop up</h3></PostForm>
        </div>
    )





}

export default AdminImplant;