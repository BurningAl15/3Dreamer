import "./App.scss";
import NavbarComponent from "./components/navbar";
import CardGroupComponent from "./components/card-group";
import CardGroupTeamComponent from "./components/card-group-team";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import initialGif from "./Images/InitialGif.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent></NavbarComponent>
      </header>

      <Container fluid className="filter-me">
        {/* <video className="videoTag filter-video" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video> */}
        {/* <div className="videoTag filter-video">
          <img className="initial_gif" src={initialGif} alt="Initial Gif"></img>
        </div> */}
        <img className="videoTag filter-video" src={initialGif} alt="Initial Gif"></img>

        <Container fluid className="filter">
          <h1>Bienvenido</h1>
        </Container>
      </Container>

      <section id="#services" className="services section">
        <h1 className="title_text">¿Qué servicios ofrecemos?</h1>
        <span className="decoration_line"></span>
        <div className="services-container">
          <Row className="row-services">
            <img
              className="row-image-services"
              src={require("./Images/services/ventaModelo3d.jpg").default}
              alt=""
            />
            <div className="row-services-content">
              <h5 className="row-services-content-title content_a title">
                Venta de Modelos impresos 3D
              </h5>
              <p className="content_b 600">
                Compra un modelo hecho por nuestra increíble artista 3d, quién
                tiene experiencia haciendo modelos para simuladores y
                videojuegos.
              </p>
            </div>
          </Row>
          <Row className="row-services">
            <div className="row-services-content">
              <h5 className="row-services-content-title content_a title">
                Crea desde 0 a tus manos
              </h5>
              <p className="content_b 600">
                Si quieres comprar algo pero no encuentras lo que deseas en
                nuestro catálogo, podemos ayudarte desde la conceptualización de
                tu objeto hasta la impresión, incluyéndote en todo el proceso
                para que aprendas.
              </p>
            </div>
            <img
              className="row-image-services"
              src={require("./Images/services/0aMano.jpg").default}
              alt=""
            />
          </Row>
          <Row className="row-services">
            <img
              className="row-image-services"
              src={require("./Images/services/propioA3d.jpg").default}
              alt=""
            />
            <div className="row-services-content">
              <h5 className="row-services-content-title content_a title">
                Lleva tus creaciones a la vida
              </h5>
              <p className="content_b 600">
                Sí eres un artista 3d, o encontraste algo que te gustó en
                internet, podemos imprimirlo para ti e incluso personalizarlo.
              </p>
            </div>
          </Row>
        </div>
      </section>

      <section id="#products" className="products section">
        <h1 className="title_text">Nuestros Productos</h1>
        <span className="decoration_line"></span>
        <CardGroupComponent></CardGroupComponent>
      </section>

      <section id="#about-us" className="about-us section">
        <h1 className="title_text">Sobre Nosotros</h1>
        <span className="decoration_line"></span>
        <div className="about-us-container">
          <p className="about-us-what-we-do content_a 600">
            Somos una empresa dedicada a la creación de modelos personalizados.
          </p>
          <div className="about-us-info-container">
            <div className="info-container">
              <h4 className="content_a title">Misión</h4>
              <p className="content_b 500">
                Somos una empresa dedicada a la creación de objetos
                personalizados impresos en 3D.
              </p>
            </div>
            <img src={require("./Images/Logo3dreamer.png").default} alt="alt" />
            <div className="info-container">
              <h4 className="content_a title">Visión</h4>
              <p className="content_b 500">
                Somos una empresa dedicada a la creación de modelos
                personalizados.
              </p>
            </div>
          </div>
          <CardGroupTeamComponent></CardGroupTeamComponent>

          <div className="about-us-founders">
            <FontAwesomeIcon className="left-arrow" icon={faArrowLeft} />
            <h4 className="founders-text">Fundadores</h4>
            <FontAwesomeIcon className="right-arrow" icon={faArrowRight} />
          </div>
        </div>
      </section>

      <section id="#contact-us" className="contact-us section">
        <h1 className="title_text">Consultas y pedidos</h1>
        <span className="decoration_line"></span>

        <ul className="contact-us-container">
          <li className="contact-us-content content_a">
            Para información de promociones o en caso quieras comprar más de 2
            objetos, hablanos para hacer un descuento.
          </li>
          <li className="contact-us-content content_a">
            Si tienes alguna pregunta sobre nuestros productos y/o precios o
            deseas adquirir algún objeto de nuestro catálogo, encuentranos en
            nuestras redes sociales.
          </li>
        </ul>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-text content_a">
            Made with <FontAwesomeIcon icon={faHeart} size="1x" /> by Aldhair
            Vera and Nancy Rojas - 2021
          </div>
          <div className="social-media-bar">
            <a
              className="social-link"
              href="https://www.facebook.com/3DreamerInc-101302735350395"
              rel="noreferrer"
              target="_blank"
            >
              <div className="social-media-buttons">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
              </div>
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/3dreamer.inc/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="social-media-buttons">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </div>
            </a>
            <a
              className="social-link"
              href="https://api.whatsapp.com/send?phone=+51998381252"
              rel="noreferrer"
              target="_blank"
            >
              <div className="social-media-buttons">
                <FontAwesomeIcon icon={faWhatsapp} size="3x" />
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
