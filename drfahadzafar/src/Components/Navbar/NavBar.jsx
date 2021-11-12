
import { Navbar, Nav } from "react-bootstrap"
import "./navbar.scss"
import { FaTooth, FaHome, FaLock } from "react-icons/fa"
import { MdHealing, MdContactMail } from "react-icons/md"
import { GiHealing } from "react-icons/gi"
const NavBar = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="" variant="" id="navbar" >

            <Navbar.Brand href="/home" className="brand" >
                {/* <img src="../../img/namelogo.png" alt="" width="100px" height="50" /> */}
                {/* fz.perio */}
                <div class="sign">
                    <span className="fast-flicker"> </span>FZ<span className="flicker">.</span>Perio
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ml-auto">
                    <Nav.Link href="/home" className="mx-4" id="navbar"><FaHome /> Home</Nav.Link>
                    <Nav.Link href="/patients" className="mx-4" id="navbar"><GiHealing />   Patients</Nav.Link>
                    <Nav.Link href="/healthprofessional" className="mx-4" id="navbar"> <MdHealing />  Health Professional</Nav.Link>
                    <Nav.Link href="/perio" className="mx-4" id="navbar"> <FaTooth />  Perio Cases</Nav.Link>
                    <Nav.Link href="/implant" className="mx-4" id="navbar"> <FaTooth />  Implant Cases</Nav.Link>
                    <Nav.Link href="/contacts" className="mx-4" id="navbar"><MdContactMail />  Contacts</Nav.Link>
                    <Nav.Link href="/login" className="mx-4" id="navbar">  <FaLock /></Nav.Link>
                </Nav>

            </Navbar.Collapse>

        </Navbar>

    )
}
export default NavBar;
