import { Form, Button, Container } from 'react-bootstrap'

import "./style.css"
import { Link } from "react-router-dom"
import { Formik, Field } from "formik"

const Login = () => (

    <Formik
        initialValues={{
            email: "",
            password: "",

        }}
    >
        <Container className="login d-flex justify-content-center">
            <Form id="">
                <img src="../../img/logo2.png" className="logo mb-4" alt="" />
                <h3 id="title">Admin Only</h3>

                <div className="form-group">
                    <label htmlFor="email">
                        {" "}

                        Email Address :
                    </label>
                    <Field
                        id="email"
                        className="form-control"
                        name="email"
                        type="email"
                    />

                </div>
                <div className="form-group">
                    <label >
                        Password :
                    </label>
                    <Field
                        id="password"
                        className="form-control"
                        name="password"
                        type="password"
                    />
                </div>

                <Button variant="success" type="submit" className="my-2 btn btn-medium w-100 mb-5" id="btn">
                    <Link to="/admin" className="link">      Log in</Link>
                </Button>


            </Form>
        </Container>
    </Formik >
)
export default Login