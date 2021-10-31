
import { Navbar, Nav, Dropdown } from "react-bootstrap"
import "./style.css"
import { FaTooth, FaHome, FaLock } from "react-icons/fa"
import { MdHealing, MdContactMail } from "react-icons/md"
import { GiHealing } from "react-icons/gi"
const NavBar = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" id="navbar" >
            {/* <Container> */}
            <Navbar.Brand href="/home" className="brand" >
                <img src="../../img/namelogo.png" alt="" width="200px" height="50" />
                {/* fz.perio */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ml-auto">
                    <Nav.Link href="/home" className="mx-4"><FaHome /> Home</Nav.Link>
                    <Nav.Link href="/patients" className="mx-4"><GiHealing />   Patients</Nav.Link>
                    <Nav.Link href="/healthprofessional" className="mx-4"> <MdHealing />  Health Professional</Nav.Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic" className="mx-4">
                            <FaTooth /> Cases
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    Perio
                                </Dropdown.Toggle>


                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Non Surgical Therapy</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Gum Plastic Surgery</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Crown Length Surgery</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Periodontal Regenerative Surgery</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">Pocket Elimination/Osseous Resective Surgery</Dropdown.Item>
                                    <Dropdown.Item href="#/action-6">Impackted Canine Exposure</Dropdown.Item>
                                    <Dropdown.Item href="#/action-7">Frenulectomy</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    Implants Dentistry
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Implant Surgery</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Guided Bone Regeneration</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Esthetic Problems Around Implants</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Peri Implantitis Treatment</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">Sinus Lift Procedure</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Dropdown.Menu>
                    </Dropdown>
                    <Nav.Link href="/contacts" className="mx-4"><MdContactMail />  Contacts</Nav.Link>
                    <Nav.Link href="/login" className="mx-4">  <FaLock /></Nav.Link>
                </Nav>

            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>

    )
}
export default NavBar;
