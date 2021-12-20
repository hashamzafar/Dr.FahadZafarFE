
import { Navbar, Nav } from "react-bootstrap"
import "./navbar.scss"
import { FaLock } from "react-icons/fa"

const NavBar = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="trasperant" variant="light" id="navbar">

            <Navbar.Brand href="/" className="brand" >

                <div className="sign">
                    <span className="fast-flicker"> </span>FZ<span className="flicker">.</span>Perio
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ml-auto">
                    <Nav.Link href="/" className="mx-2" id="navbar">

                        Home</Nav.Link>
                    <Nav.Link href="/patients" className="mx-2" id="navbar">

                        Patients</Nav.Link>

                    <Nav.Link href="/perio" className="mx-2" id="navbar">

                        Perio Cases</Nav.Link>
                    <Nav.Link href="/implant" className="mx-2" id="navbar">

                        Implant Cases</Nav.Link>
                    <Nav.Link href="/contacts" className="mx-2" id="navbar">

                        Contacts</Nav.Link>
                    <Nav.Link href="/login" className="mx-2" id="navbar" onClick={() => window.localStorage.setItem("user_Token", " ")}>
                        <FaLock />
                    </Nav.Link>
                </Nav>

            </Navbar.Collapse>

        </Navbar >

    )
}
export default NavBar;
