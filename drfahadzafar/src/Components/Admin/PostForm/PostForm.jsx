import { Form, Button, Container } from "react-bootstrap";
import "./PostForm.css";
import { useEffect, useState } from "react"
import axios from 'axios'



const PostForm = (props) => {

    const [fileInputState, setFileInputState] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState();

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file)
    };

    const previewFile = (file) => {

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }

    }
    const handleSubmitFile = (e) => {
        e.preventDefault()
        if (!previewSource) return
        uploadImage(previewSource)
        console.log("submitted")
    }
    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage)
        try {
            await fetch(`${process.env.REACT_APP_API_PERIO}` + endpoint, {
                method: "POST",
                body: JSON.stringify({ image: base64EncodedImage }),
                headers: { "Content-type": "application/json" }
            })

        } catch (error) {
            console.error(error)
        }
    }


    const { endpoint } = props
    const [perio, setPerio] = useState({
        title: "",
        description: "",
    });




    const handleSubmit = async () => {
        try {

            const response = await axios.post(`${process.env.REACT_APP_API_PERIO}` + endpoint, perio)
            console.log(response, 'check api with axios')

            console.log("submitted2")

        } catch (error) { }
    }
    const Inputhandler = (e) => {
        setPerio({ ...perio, [e.target.name]: e.target.value });
    }
    console.log(perio, "sadsdasjdhkasjd")

    return props.trigger ? (
        <Form className="popup" onSubmit={handleSubmit, handleSubmitFile}>
            <Container>

                <Form.Group controlId="formBasicEmail" className="mx-5">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" onChange={(e) => Inputhandler(e)} placeholder="Title" />
                </Form.Group>
                <Form.Group
                    controlId="formBasicEmail"

                    className="mx-5"
                >
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
                        type="file"
                        name="image"
                        onChange={handleFileInputChange}
                        value={fileInputState}
                    />

                </Form.Group>

                <Button variant="primary" type="submit" className="mx-5">
                    Submit
                </Button>
                <Button
                    className="btn btn-danger mx-5"
                    onClick={() => props.setTrigger(false)}
                >
                    Close
                </Button>
                {previewSource && (
                    <img src={previewSource} alt="chosen" height="300px" />
                )}
            </Container>
        </Form>


    ) : (
        ""
    );
};

export default PostForm;
