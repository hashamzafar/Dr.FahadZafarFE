import { Form, Button, Container } from "react-bootstrap";
import { ImCancelCircle } from "react-icons/im";
// import "../PostForm/PostForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
const EditFormImplant = (props) => {
    //     // const { title, description, image, _id } = props.articles
    //     // // console.log(_id)

    //     // const [cases, setCases] = useState({

    // })
    console.log(props.match.params.id)
    // console.log(_id)
    // console.log(cases.title, cases.description, cases.image, cases.id)

    const [implant, setImplant] = useState({});
    const [file, setFile] = useState()
    const getImplant = async () => {
        try {
            const data = await axios.get(`${process.env.REACT_APP_API_IMPLANT}/${props.match.params.endpoint}/${props.match.params.id}`)

            // console.log("data:", data);
            // const response = await data.json();
            setImplant(data.data);
            console.log("response:", implant);
        } catch (error) { }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_IMPLANT}/${props.match.params.endpoint}/${props.match.params.id}`, {
                method: 'PUT',
                body: JSON.stringify(implant),
                headers: {
                    "content-type": "application/json"
                }
            });

            if (response.ok) {
                let cases = await response.json()
                props.history.push("/admin/implant")
                console.log(cases)
            }
            const res = await fetch(`${process.env.REACT_APP_API_IMPLANT}${props.match.params.endpoint}/${props.match.params.id}/img`, {
                method: 'POST',

                body: file
            });
        } catch (error) { }
    };

    useEffect(async () => {
        getImplant()

    }, [])
    // return props.trigger ? (
    return (
        <Container>
            <Form className="popup" onSubmit={handleSubmit}>
                {/* <Button
                    className="btn-sm btn-danger mx-5"
                    onClick={() => props.setTrigger(false)}
                >
                    <ImCancelCircle />
                </Button> */}
                <Form.Group controlId="formBasicEmail" className="mx-5 py-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={implant.title}
                        onChange={(e) => setImplant({ ...implant, title: e.target.value })}
                        placeholder="Title"

                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="mx-5">
                    <Form.Label for="exampleFormControlTextarea1">Description</Form.Label>

                    <textarea
                        value={implant.description}
                        onChange={(e) => setImplant({ ...implant, description: e.target.value })}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        name="description"
                        rows="10"

                    ></textarea>
                </Form.Group>
                <Form.Group className="mx-5">
                    <Form.File
                        id="exampleFormControlFile1"
                        label="Image"
                        name="image"
                    // onchange={(e) => setImplant({ ...implant, image: e.target.value })}
                    // value={implant.image}
                    />
                    {/* {previewSource && (
                        <img src={previewSource} alt="chosen" height="300px" />
                    )} */}
                </Form.Group>

                <Button variant="primary" type="submit" className="mx-5">
                    Save
                </Button>
                {/* <Button
                    className="btn btn-danger mx-5"
                // onClick={() => props.setTrigger(false)}
                >
                    close
                </Button> */}

            </Form>

        </Container>
    )
    // : (
    //     ""
    // );
};

export default withRouter(EditFormImplant);
