import { Jumbotron, Col, Row } from 'react-bootstrap'
import "./style.css"



const PatientJumbotron = () => {
    return (

        <Jumbotron fluid>
            <h1 className="title">#NOFILTER</h1>
            <p className="heading">
                For your white & perfect smile
            </p>
            <Row className="split-bg">
                <Col lg={4}></Col>
                <Col sm={12} md={6} lg={4}>
                    <h3 className="text space-top">Dental Hygiene</h3>
                    <p className="heading">Dental hygiene is the crespcatform o gentaloes
                        prevention: With proper and regular oral care, you can help
                        preventioon dec sy and intamins.oy oum diseases,
                        Antino frequent Meite to our dentie.</p>
                </Col>

                <Col lg={4}></Col>
            </Row>
        </Jumbotron>



    )
}
export default PatientJumbotron