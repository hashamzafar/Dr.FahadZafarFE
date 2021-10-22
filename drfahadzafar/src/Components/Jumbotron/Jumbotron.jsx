
import { Container, Jumbotron } from 'react-bootstrap'
import "./style.css"


const PageHeader = () => {
    return (
        <Jumbotron fluid  >
            {/* <Container> */}
            <video className="video-background jumbotron-background " preload="true" muted="true" autoplay="true" loop="true"  >
                <source src="./test.mp4" type="video/mp4" />


            </video >
            <div className="container">
                <h1>

                    Dr. Fahad Zafar</h1>
                <hr />
                <p>
                    Specialist periodontis and Implant Surgery
                </p></div>
            {/* </Container> */}
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
