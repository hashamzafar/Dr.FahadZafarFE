import { Row, Col } from "react-bootstrap"
import "./style.css"




const Bio = () => {
    return (
        <div className='bg-dark pt-3 backg postition-fix'>

            <Row>
                {/* <Col md={4} className='mt-5' >
                    <h2>Articles &amp Education</h2>
                    <hr />
                    <img src="../../img/profile.jpg" alt="" width="300" height="300" className="profile" />
                    <h5 className="mt-5"> Dr. Fahad Zafar</h5>
                    <hr />
                    <h6>Specialist periodontis and Implant Surgery</h6>

                </Col> */}
                <Col sm={12} className="text-color mx-2">
                    {/* <img src="../../img/logo2.png" className="logo mb-3" alt="" width="200" height="200" /> */}
                    <h2>
                        Bio
                    </h2>
                    <h4>
                        We are dedicated to Excellence in Dentistry and have been looking after patients from across the country and abroad since 2003.
                    </h4>
                    <p className="mb-5">
                        We have a patient centred approach, based on the individual wants and needs of those we serve. Our environment is the perfect balance between a relaxed and friendly ambiance with a clean and professional feel.

                        Our dental practice in Bearwood is ideally located to serve patients from Birmingham and surrounding areas such as Smethwick, West Bromwich, Walsall, Dudley and Halesowen, whilst many people travel from all over the country due to our reputation for the treatment of gum disease and dental implants.

                        We are situated over 2 floors with the ground floor providing easy access for those with mobility issues. Emergency appointments are available as well as late nights and weekends.

                        The minute you step through our door you are made to feel comfortable within a warm, friendly environment. Have a cup of tea or coffee whilst you complete your medical history forms prior to seeing the dentist.
                    </p>
                </Col>

            </Row>

        </div>
    )
}
export default Bio