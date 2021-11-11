import { Form, Button, Container } from "react-bootstrap";
// import "./PostForm.css";
import { useEffect, useState } from "react"
import axios from 'axios'



const PostModel = (props) => {
    const { endpoint } = props
    const addPost = fetch(`${process.env.REACT_APP_API_PERIO}` + endpoint, {
        method: "POST",
        body: JSON.stringify({}),
        headers: { "Content-type": "application/json" }
    })
    const [perio, setPerio] = useState({
        title: "",
        description: "",
        image: "",
    });
    const [pictureFile, setPictureFile] = useState(null);
    const [previewSource, setPreviewSource] = useState();
    const inputHandler = (e) => {
        setPerio({ ...perio, [e.target.name]: e.target.value });
    }

    const handleFile = (e) => {
        const file = ""
        previewFile(file)
        let formData = null
        if (pictureFile) {
            formData = new FormData()
        }
        addPost(perio, formData)
    };

    const [fileInputState, setFileInputState] = useState("");
    // const [selectedFile, setSelectedFile] = useState("");
    // const [previewSource, setPreviewSource] = useState();



    const previewFile = (file) => {

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }

    }


    return props.trigger ? (
        <Container>
            <Form className="popup " id="post-form"

                onSubmit={(e) => {
                    // e.preventDefault();
                    handleFile();
                    setPerio({ title: "", description: "" });
                    // setTimeout(() => {
                    //     onUpdate();
                    // }, 2000);
                    // onHide();
                }}>


                <Form.Group controlId="formBasicEmail" className="mx-5 title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" onChange={(e) => inputHandler(e)} placeholder="Title" value={perio.title} />
                </Form.Group>
                <Form.Group
                    controlId="formBasicEmail"

                    className="mx-5"
                >
                    <Form.Label for="exampleFormControlTextarea1">Description</Form.Label>

                    <textarea
                        onChange={(e) => inputHandler(e)}
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        name="description"
                        rows="10"
                        value={perio.description}
                    ></textarea>
                </Form.Group>
                <Form.Group className="mx-5">
                    {/* <Form.File
                        id="exampleFormControlFile1"
                        type="file"
                        name="image"
                        onChange={handleFileInputChange}
                        value={fileInputState}
                    /> */}
                    <input type="file"
                        id="exampleFormControlFile1"
                        name="image"
                        // onChange={(event) => { uploadImage(event.target.file) }}
                        // type="file"
                        onChange={(e) => setPictureFile(e.target.files[0])}
                        value={fileInputState}
                    />
                    <Form.Control
                        className="d-none"
                        id="file-input"


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
                    <img src={previewSource} alt="chosen" height="100px" width="100px" className="ml-auto" />
                )}
            </Form>
        </Container>

    ) : (
        ""
    );
};

export default PostModel;