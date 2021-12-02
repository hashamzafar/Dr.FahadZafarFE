
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap"


const SideNavBar = () => {
    return (
        // <Navbar bg="light" variant="light">
        //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        //     <Nav className="mr-auto">
        //         <Nav.Link href="#home">Home</Nav.Link>
        //         <Nav.Link href="#features">Features</Nav.Link>
        //         <Nav.Link href="#pricing">Pricing</Nav.Link>
        //     </Nav>
        //     <Form inline>
        //         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        //         <Button variant="outline-primary">Search</Button>
        //     </Form>
        // </Navbar>
        <>
            <nav class="navbar bg-light">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#"> Home </a>
                    </li>
                    <li class="nav-item">
                        <a href="#"> Services </a>
                    </li>
                    <li class="nav-item">
                        <a href="#"> Contact </a>
                    </li>
                    <li class="nav-item">
                        <a href="#"> Blogs </a>
                    </li>
                </ul>
            </nav>
            {/* <div className=”container” >
            The Web Content in details.
        </div> */}
        </>
    )
}
export default SideNavBar