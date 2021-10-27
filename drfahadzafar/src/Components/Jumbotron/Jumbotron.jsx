
import { Jumbotron, Col, Row } from 'react-bootstrap'
import "./style.css"
import Bio from "../Bio/Bio"

const PageHeader = () => {
    return (
        <Jumbotron fluid  >
            <Row><Col md={4}>
                <img src="../../img/logo2.png" className="logo " alt="" width="200" height="200" />
                <Bio />

            </Col>

                <Col sm={12} md={8}>
                    {/* <Container> */}

                    <video className="video-background jumbotron-background " preload="true" muted="false" autoplay="true" loop="true"  >
                        <source src="./jumbo.mp4" type="video/mp4" />


                    </video >

                </Col>
                {/* <img className="video-background jumbotron-background " src="https://scontent.fmxp4-1.fna.fbcdn.net/v/t1.18169-9/13164326_948632738587816_588338585409253845_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=nxH2zFNAW7AAX8grj2d&tn=cerboUpNxlfX__-B&_nc_ht=scontent.fmxp4-1.fna&oh=ed9b37087aa6980599c978a9933c85f4&oe=6197D9BA" alt="" /> */}
                {/* <div className="container"> */}
                {/* <h1>

                    Dr. Fahad Zafar</h1>
                <hr />
                <p>
                    Specialist periodontis and Implant Surgery
                </p> */}

                {/* </div> */}
                {/* </Container> */}
            </Row>
        </Jumbotron>
        // <div className="jumbotron">
        //     
        //     <div className="container-fluid" variant="dark" id="content">
        //         <h1 className="display-3">Dr. Fahad Zafar</h1>
        //         <p className="lead">specialist periodontis and Implant Surgery</p>

        //     </div>
        // </div>
    )
}
export default PageHeader
