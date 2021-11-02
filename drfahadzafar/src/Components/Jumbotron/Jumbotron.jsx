
import { Jumbotron, Col, Row } from 'react-bootstrap'
import "./style.css"


const PageHeader = () => {
    return (
        <Jumbotron  >
            <video className="video-background jumbotron-background " preload="true" muted="false" autoplay="true" loop="true"  >
                <source src="./jumbo.mp4" type="video/mp4" />
            </video >
        </Jumbotron >

    )
}
export default PageHeader
