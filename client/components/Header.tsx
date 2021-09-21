import { Navbar, Nav, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return(
        <Navbar bg="dark" expand="xl" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Food Data</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/companies">Companies</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;