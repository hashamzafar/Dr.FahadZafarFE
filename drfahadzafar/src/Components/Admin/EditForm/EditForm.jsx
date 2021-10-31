import { Form, Button, Container } from "react-bootstrap";
import { ImCancelCircle } from "react-icons/im";
import "../PostForm/PostForm.css";
import { useEffect, useState } from "react";
import axios from "axios";

const EditForm = (props) => {
    const [fileInputState, setFileInputState] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState("");

    const handleFileInputChange = (e) => {
        const file = e.target.file[0];
        previewFile(file)
    };

    const previewFile = (file) => {

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }

    }
    const { endpoint, id } = props;
    const [perio, setPerio] = useState({
        title: "",
        description: "",
    });

    const handleSubmit = async () => {
        try {
            const response = await axios.put(
                `${process.env.REACT_APP_API_PERIO}` + endpoint + id,
                perio
            );
            console.log(response, "check api with axios");
        } catch (error) { }
    };
    const Inputhandler = (e) => {
        setPerio({ ...perio, [e.target.name]: e.target.value });
    };
    console.log(perio, "sadsdasjdhkasjd");

    return props.trigger ? (
        <Container>
            <Form className="popup" onSubmit={handleSubmit}>
                {/* <Button
                    className="btn-sm btn-danger mx-5"
                    onClick={() => props.setTrigger(false)}
                >
                    <ImCancelCircle />
                </Button> */}
                <Form.Group controlId="formBasicEmail" className="mx-5">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        onChange={(e) => Inputhandler(e)}
                        placeholder="Title"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="mx-5">
                    <Form.Label for="exampleFormControlTextarea1">Description</Form.Label>

                    <textarea
                        onChange={(e) => Inputhandler(e)}
                        class="form-control"
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
                        onchange={handleFileInputChange}
                        VALUE={fileInputState}
                    />
                    {previewSource && (
                        <img src={previewSource} alt="chosen" height="300px" />
                    )}
                </Form.Group>

                <Button variant="primary" type="submit" className="mx-5">
                    add
                </Button>
                <Button
                    className="btn btn-danger mx-5"
                    onClick={() => props.setTrigger(false)}
                >
                    close
                </Button>

            </Form>

        </Container>
    ) : (
        ""
    );
};

export default EditForm;
