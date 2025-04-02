import Carousel from "react-bootstrap/Carousel";
import "../styles/Home.css";

function Home() {
  const itemStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <Carousel data-bs-theme="light" controls={true} style={itemStyle}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="contenidos.jpeg" alt="Primera viñeta" />
        <Carousel.Caption style={{ backgroundColor: "#00000080" }}>
          <h1>ETAPAS DE DESARROLLO</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="cartelCorvera.jpg" alt="Segunda viñeta" />
        <Carousel.Caption style={{ backgroundColor: "#00000080" }}>
          <h1>¡CURSOS DE TENIS!</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="fedérate.png" alt="Tercera viñeta" />
        <Carousel.Caption style={{ backgroundColor: "#00000080" }}>
          <h1>JUEGOS ESCOLARES</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
