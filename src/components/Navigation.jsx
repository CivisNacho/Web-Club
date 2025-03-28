import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router";

function Navigation() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="pb-2">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img alt="Logo gimnasio" src="/logo.gif" width={40} height={40} style={{ marginRight: "10%" }} />
                    Grupo Tenis Corvera
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="ACTIVIDADES" id="basic-nav-dropdown" menuVariant="dark" className="mt-2"
                        style={{marginRight:"5%"}}>
                            <NavDropdown.Item as={Link} to="#">
                                CURSOS de TENIS
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="#">
                                STAGE de TENIS
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="#">
                                JUEGOS del PRINCIPADO
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="#">
                                DIA de CONVIVENCIA
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/equipo_tecnico" className="mt-2" style={{marginRight:"5%"}}>
                            EQUIPO TÉCNICO  
                        </Nav.Link>

                        <Nav.Link as={Link} to="/contacto" className="mt-2">
                            CONTACTO
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
