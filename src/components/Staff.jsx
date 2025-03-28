import { Card, Col, Container, Row } from "react-bootstrap";
import StaffCard from "./StaffCard";

function Staff() {

    return (
        <Container>
            <h2 className="text-center py-3">Equipo técnico</h2>
            <Row>
                <Col key="1" md={3} className="mb-4">
                    <StaffCard
                        name="Rubén Faya"
                        image="ru.jpg"
                        titles={["Monitor Nacional", "Instructor Nacional", "Árbitro Nacional"]}
                    />
                </Col>
                <Col>
                    <StaffCard
                        name="Adólfo Flórez"
                        image="ao.jpeg"
                        titles={["Diplomado Educación Física", "Profesor Nacional", "Árbitro Nacional"]}
                    />
                </Col>
                <Col>
                    <StaffCard
                        name="Fernando Testón"
                        image="fe.jpg"
                        titles={["Monitor Nacional", "Instructor Nacional", "Árbitro Nacional"]}
                    />
                </Col>
                <Col>
                    <StaffCard
                        name="Jose Luis González"
                        image="jo.jpg"
                        titles={["Monitor Nacional"]}
                    />
                </Col>
            </Row>
        </Container>
    );
}
export default Staff;