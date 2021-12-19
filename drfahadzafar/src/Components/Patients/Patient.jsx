import { Container, Row, Col } from 'react-bootstrap'
import TreatmentCarousel from '../../Components/Carousel/Carousel'
import PatientJumbotron from "../PatientJumbtron/PatientJumbotron"
import PatientCard from '../PatientCard/PatientCard'
const Patients = () => {
    return (
        <>

            <PatientJumbotron />
            <Container >
                <Row>
                    <Col md={7}>
                        <h3>Oral health is vital to our general health. Poor oral health has been linked to other serious diseases like diabetes and cardiovascular disease.</h3>

                        <p className="mb-5 mt-3 text-left">


                            Good oral hygiene begins with an effective at-home routine and is complemented with professional debridement by a hygienist or periodontist. If you have symptoms of gum disease, your dentist may recommend more frequent debridement appointments to help stop and reverse any gum issues.
                            Dental hygiene treatments effectively clean your teeth and maintain the health of your mouth and gum tissue.
                        </p>
                        <h3>
                            How can I improve my dental hygiene at home?</h3>
                        <p className="mt-3 mb-5 text-left">
                            Keeping a good daily oral cleaning routine is an essential facet of improving your level of dental health. This includes brushing your teeth at least twice daily using fluoride toothpaste. Fluoride helps to restore lost minerals to your teeth for extra protection from damage and decay. Use interdental cleaning aids such as floss and interdental brushes at least once a day to remove hard-to-reach plaque build-up between teeth.

                            Your diet can also improve or worsen your dental hygiene. A good amount of fruit and veg is important for healthy gums.

                            Drinking enough water is also important for dental health because it stimulates saliva production and washes away food particles.
                        </p>
                    </Col>
                    < Col>
                        <PatientCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Patients