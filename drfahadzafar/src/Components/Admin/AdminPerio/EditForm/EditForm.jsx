import { Form, Button, Container } from "react-bootstrap";
import "../PostForm/PostForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
const EditForm = (props) => {

    // console.log(props.match.params.id)


    const [perio, setPerio] = useState({});
    const [file, setFile] = useState()
    const getPerio = async () => {
        try {
            const data = await axios.get(`${process.env.REACT_APP_API_PERIO}/${props.match.params.endpoint}/${props.match.params.id}`)

            // console.log("data:", data);
            setPerio(data.data);
            console.log("response:", perio);
        } catch (error) { }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_PERIO}/${props.match.params.endpoint}/${props.match.params.id}`, {
                method: 'PUT',
                body: JSON.stringify(perio),
                headers: {
                    "content-type": "application/json"
                }
            });

            if (response.ok) {
                let cases = await response.json()
                props.history.push("/admin/perio")
                console.log(cases)
            }
            const res = await fetch(`${process.env.REACT_APP_API_PERIO}${props.match.params.endpoint}/${props.match.params.id}/img`, {
                method: 'POST',

                body: file
            });
        } catch (error) { }
    };

    useEffect(async () => {
        getPerio()

    }, [])

    return (
        <Container>
            <Form className="popup" onSubmit={handleSubmit}>

                <Form.Group controlId="formBasicEmail" className="mx-5 py-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={perio.title}
                        onChange={(e) => setPerio({ ...perio, title: e.target.value })}
                        placeholder="Title"

                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="mx-5">
                    <Form.Label for="exampleFormControlTextarea1">Description</Form.Label>

                    <textarea
                        value={perio.description}
                        onChange={(e) => setPerio({ ...perio, description: e.target.value })}
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

                    />

                </Form.Group>

                <Button variant="primary" type="submit" className="mx-5">
                    Save
                </Button>


            </Form>

        </Container>
    )
    // : (
    //     ""
    // );
};

export default withRouter(EditForm);
