import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {

  const year = new Date().getFullYear(); // Para que se actualice el año solo

  return (
    <footer className="bg-dark text-light text-center p-3">
      <Container>
        <Row className="justify-content-center mb-3">
          <Col xs="auto mt-1">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <img src="Instagram.png" alt="Logo instagram" style={{ width: "35px", height: "35px" }} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.facebook.com/grupo.teniscorvera" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <img src="facebook.png" alt="Logo facebook" style={{ width: "40px", height: "40px" }} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <img src="Twitter.png" alt="Logo twitter" style={{ width: "40px", height: "40px" }} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://maps.app.goo.gl/Ed8nSBkDcXGBQSwS8" target="_blank" rel="noopener noreferrer" className="text-light me-3">Polideportivo IES Corvera</a>
            <p>
              <a href="mailto:correo@ejemplo.es" className="text-light">
                correo@ejemplo.es
              </a>
            </p>
            <p>
              <a href="#" className="text-light">
                Avisos Legales
              </a>{" "}
              |
              <a href="#" className="text-light">
                {" "}
                Política de privacidad
              </a>
            </p>
            <p>&copy; {year}. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
