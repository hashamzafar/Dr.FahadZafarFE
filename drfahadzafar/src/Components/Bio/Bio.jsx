import { Row, Col, Container } from 'react-bootstrap'
import "./style.css"




const Bio = () => {
    return (
        // <Container className="">
        <Row>
            <Col id="show_bg" sm={12} md={6} lg={4}>
                <a href="/">Home / About</a>
                <h1 className="title">ABOUT ME</h1>
                <hr />

                <img src="../../img/profile.jpg" alt="" className="profile" />
                <div className="text">Perio Specialist</div>
            </Col>
            <Col sm={12} md={6} lg={8}>
                <div className=' text-color '>
                    <div className="patterns">
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="polka-dots" x="0" y="0" width="100" height="100"
                                    patternUnits="userSpaceOnUse">
                                    <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                                </pattern>
                                {/* <style>
                                    @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
                                </style> */}

                            </defs>
                            <text x="50%" y="60%" text-anchor="middle"  >
                                Dr.Fahad Zafar
                            </text>
                        </svg>
                    </div>

                    {/* <img src="../../img/logo2.png" className="logo " alt="" width="150" height="150" /> */}

                    <h4 className="text">
                        We are dedicated to Excellence in Dentistry and have been looking after patients from across the country and abroad since 2003.
                    </h4>
                    <p >
                        We have a patient centred approach, based on the individual wants and needs of those we serve. Our environment is the perfect balance between a relaxed and friendly ambiance with a clean and professional feel.

                        Our dental practice in Bearwood is ideally located to serve patients from Birmingham and surrounding areas such as Smethwick, West Bromwich, Walsall, Dudley and Halesowen, whilst many people travel from all over the country due to our reputation for the treatment of gum disease and dental implants.

                        We are situated over 2 floors with the ground floor providing easy access for those with mobility issues. Emergency appointments are available as well as late nights and weekends.

                        The minute you step through our door you are made to feel comfortable within a warm, friendly environment. Have a cup of tea or coffee whilst you complete your medical history forms prior to seeing the dentist.
                    </p>

                </div>

            </Col>

        </Row>
        // </Container >
    )
}
export default Bio