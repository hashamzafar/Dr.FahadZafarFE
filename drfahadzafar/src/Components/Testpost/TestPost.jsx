import { Form, Button, Container } from "react-bootstrap";
// import "./PostForm.css";
import { useEffect, useState } from "react"
// import axios from 'axios'
import FileBase64 from "react-file-base64";


const PostModel = (props) => {
    const { endpoint } = props
    // const addPost = fetch(`${process.env.REACT_APP_API_PERIO}` + endpoint, {
    //     method: "POST",
    //     body: JSON.stringify({}),
    //     headers: { "Content-type": "application/json" }
    // })
    // const [perio, setPerio] = useState({
    //     title: "",
    //     description: "",
    //     image: "",
    // });
    // const [pictureFile, setPictureFile] = useState(null);
    // const [previewSource, setPreviewSource] = useState();
    // const inputHandler = (e) => {
    //     setPerio({ ...perio, [e.target.name]: e.target.value });
    // }

    // const handleFile = (e) => {
    //     const file =
    //         previewFile(file)
    //     let formData = null
    //     if (pictureFile) {
    //         formData = new FormData()
    //     }
    //     addPost(perio, formData)
    // };

    // const [fileInputState, setFileInputState] = useState("");
    // const [selectedFile, setSelectedFile] = useState("");
    // const [previewSource, setPreviewSource] = useState();



    // const previewFile = (file) => {

    //     const reader = new FileReader()
    //     reader.readAsDataURL(file)
    //     reader.onloadend = () => {
    //         setPreviewSource(reader.result)
    //     }

    // }

    const intTicket = {
        title: "",
        description: "",

        image: "",
    };
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [ticket, setTicket] = useState(intTicket);
    const handleChange = (key, value) => {
        setTicket({
            ...ticket,
            [key]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_PERIO}` + endpoint, {
                method: "POST",
                // headers: {
                //     "Content-Type": "application/json",
                //     //   Authorization: Bearer ${window.localStorage.getItem("AccessToken")},
                // },
                body: JSON.stringify(title, description, image),
            });

            //   if (response.ok) {
            //     alert("tiket saved");
            //     const sendedTicket = await response.json();
            //     /*   console.log(currentUser, "Cu"); */
            //     currentUser.role === "admin" || currentUser.role === "support-team"
            //       ? history.push("/ticketDetailAdmin/" + sendedTicket._id)
            //       : history.push("/ticketDetail/" + sendedTicket._id);
            //   } else {
            //     alert("sth wrong with saving ticket, new ticket component");
            //   }
        } catch (error) {
            console.log(error);
        }
    };




    return props.trigger ? (
        <Container>
            <Form className="popup " id="post-form"

                onSubmit={handleSubmit}>


                <Form.Group controlId="formBasicEmail" className="mx-5 title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group
                    controlId="formBasicEmail"

                    className="mx-5"
                >
                    <Form.Label for="exampleFormControlTextarea1">Description</Form.Label>

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                    {/* <input type="file"
                        id="exampleFormControlFile1"
                        name="image"
                        // onChange={(event) => { uploadImage(event.target.file) }}
                        // type="file"
                        onChange={(e) => setPictureFile(e.target.files[0])}
                        value={fileInputState}
                    /> */}
                    <FileBase64
                        // type="file"
                        // multiple={false}
                        // onDone={({ base64 }) =>
                        //     setImage({ file: base64 })

                        type="file"
                        onchange={(e) => setImage(e)}
                        value={image}

                    />

                    {/* <Form.Control
                        className="d-none"
                        id="file-input"


                    /> */}
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

                {/* {previewSource && (
                    <img src={previewSource} alt="chosen" height="100px" width="100px" className="ml-auto" />
                )} */}
            </Form>
        </Container>

    ) : (
        ""
    );
};

export default PostModel;