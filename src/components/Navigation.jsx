import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router";
import "../styles/Navigation.css"

function Navigation() {

    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="pb-2">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img alt="Logo Grupo Tenis Corvera" src="./logo.gif" width={40} height={40} style={{ marginRight: "10%" }} />
                    Grupo Tenis Corvera
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="ACTIVIDADES" id="basic-nav-dropdown" menuVariant="dark" className="mt-2"
                        >
                            <NavDropdown.Item
                                as="a"
                                href="./cursos.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light me-3">
                                Cursos de tenis
                            </NavDropdown.Item>

                            <NavDropdown.Item as={Link} to="#">
                                Stage de tenis
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="#">
                                Juegos del principado
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="#">
                                Día de convivencia
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/equipo_tecnico" className="mt-2" >
                            EQUIPO TÉCNICO
                        </Nav.Link>

                        <Nav.Link as={Link} to="/contacto" className="mt-2" >
                            CONTACTO
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
