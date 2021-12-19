import { Form, Button, Container } from 'react-bootstrap'
import { useState } from "react";
import "./style.css"
import { Link } from "react-router-dom"
import { Formik, Field } from "formik"

const Login = (props) => {

    const [login, setLogin] = useState("");
    const [loginValidation, setLoginValidation] = useState(false);
    const [isTransitionPage, setTransitionPage] = useState(false);
    const [token, setToken] = useState("");


    const handleForm = (key, value) => {
        setLogin({
            ...login,
            [key]: value,
        });


    };

    const getUserToken = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch(
                `${process.env.REACT_APP_API_LOGIN}/user/session`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(login),
                }
            );

            if (response.ok) {
                let userToken = await response.json();

                window.localStorage.setItem("user_Token", userToken.accessToken);

                setToken(window.localStorage.getItem("user_Token", userToken));
                getUserData(token);
            } else {
                setLoginValidation(true);
            }
        } catch (error) {
            setLoginValidation(true);

        }
    };
    const getUserData = async () => {
        let token = "Bearer " + window.localStorage.getItem("user_Token");
        try {
            let response = await fetch(`${process.env.REACT_APP_API_LOGIN}/user/me`, {
                method: "GET",
                headers: {
                    Authorization: token,
                },
            });
            if (response.ok) {
                let userData = await response.json();
                if (userData.email === undefined) {
                    setLoginValidation(true);
                    return;
                }
                setTransitionPage(true);
                let userDataKeyList = Object.keys(userData);
                userDataKeyList.forEach((key) =>
                    window.localStorage.setItem(key, userData[key])
                );
                props.history.push("/admin");
            } else {
                setLoginValidation(true);
                props.history.push("login")
            }
        } catch (e) {
            console.log(e);
            return e;
        }
    };
    return (
        <div className="card-background py-5">
            <Container id="container" className="py-5 ">
                <Form id="login mb-5"  >
                    <div  >
                        <img
                            src="../../img/logo2.png"
                            width="300"
                            height="300"
                            alt=""
                            className="mr-auto logo my-3"
                        />

                    </div>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label id="title">Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => {
                                handleForm("email", e.target.value);
                            }}
                        />

                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label id="title">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => {
                                handleForm("password", e.target.value);
                            }}
                        />
                    </Form.Group>


                    <Form.Group controlId="formBasicCheckbox" id="title">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                    {loginValidation && (
                        <div className="container d-flex justify-content-center">
                            <p className="text-danger">
                                <strong>Sorry incorrect username :(</strong>
                            </p>
                        </div>
                    )}


                    <Button variant="success" type="submit" className="my-2 btn btn-large w-100" id="btn" onClick={(e) => getUserToken(e)}>
                        Log in
                    </Button>

                </Form>
            </Container>
        </div >
    )
}
export default Login