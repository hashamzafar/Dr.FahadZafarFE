
import { Navbar, Nav } from "react-bootstrap"
import "./navbar.scss"
import { FaTooth, FaHome, FaLock } from "react-icons/fa"
import { MdHealing, MdContactMail } from "react-icons/md"
import { GiHealing } from "react-icons/gi"
const NavBar = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="trasperant" variant="light" id="navbar">

            <Navbar.Brand href="/" className="brand" >

                <div class="sign">
                    <span className="fast-flicker"> </span>FZ<span className="flicker">.</span>Perio
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ml-auto">
                    <Nav.Link href="/" className="mx-2" id="navbar">
                        {/* <FaHome />  */}
                        Home</Nav.Link>
                    <Nav.Link href="/patients" className="mx-2" id="navbar">
                        {/* <GiHealing />    */}
                        Patients</Nav.Link>
                    <Nav.Link href="/healthprofessional" className="mx-2" id="navbar">
                        {/* <MdHealing />  */}
                        Health Professional</Nav.Link>
                    <Nav.Link href="/perio" className="mx-2" id="navbar">
                        {/* <FaTooth />   */}
                        Perio Cases</Nav.Link>
                    <Nav.Link href="/implant" className="mx-2" id="navbar">
                        {/* <FaTooth />  */}
                        Implant Cases</Nav.Link>
                    <Nav.Link href="/contacts" className="mx-2" id="navbar">
                        {/* <MdContactMail />  */}
                        Contacts</Nav.Link>
                    <Nav.Link href="/login" className="mx-2" id="navbar">
                        <FaLock />
                    </Nav.Link>
                </Nav>

            </Navbar.Collapse>

        </Navbar>

    )
}
export default NavBar;
