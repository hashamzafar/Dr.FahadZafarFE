import { Form, Button, Container } from "react-bootstrap";
import "./PostForm.css";
import { useState } from "react"




const PostForm = (props) => {

    const [previewSource, setPreviewSource] = useState();

    const [file, setFile] = useState()

    const previewFile = (file) => {

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const { endpoint } = props
    const [perio, setPerio] = useState({
        title: "",
        description: "",
    });


    const handleSubmitFile = (e) => {
        e.preventDefault()
        if (!previewSource) return
        handleSubmitFile(previewSource)
        console.log("submitted")
    }
    const formData = new FormData();
    const onFileChange = (e) => {
        console.log(e.target.files[0])

        if (e.target && e.target.files[0]) {
            formData.append('image', e.target.files[0])
            setFile(formData)
            previewFile(e.target.files[0])
        } else {
            console.log("image upload not succeded")
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(file);
        try {
            const res = await fetch(`${process.env.REACT_APP_API_PERIO}${endpoint}`, {
                method: "POST",
                body: JSON.stringify(perio),
                headers: { 'Content-Type': 'application/json' }
            })
            let { _id } = await res.json()
            console.log(_id);
            const response = await fetch(`${process.env.REACT_APP_API_PERIO}${endpoint}/${_id}/img`, {
                method: 'POST',

                body: file
            })

            console.log(response, 'check api with axios')

            console.log("submitted 2")
            props.getPerio()
            props.setTrigger(false)

        } catch (error) { }
    }

    const Inputhandler = (e) => {
        setPerio({ ...perio, [e.target.name]: e.target.value });
    }

    return props.trigger ? (
        <Container>
            <Form className="popup" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mx-5 title">
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
                        className="form-control"
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
                        onChange={onFileChange} />
                </Form.Group>


                <Button variant="primary" type="submit" className="mx-5" >
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

export default PostForm;
