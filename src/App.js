import "./App.css";
import NavbarComponent from "./components/navbar";
import JumbotronComponent from "./components/jumbotron";
import CardGroupComponent from "./components/card-group";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent></NavbarComponent>
      </header>
      <section className="jumbotron space_between_sections">
        <h2 className="title_text">Algunos de nuestros productos</h2>
        <span className="decoration_line"></span>
        <JumbotronComponent></JumbotronComponent>
      </section>

      <section
        id="#contact-us"
        className="contact-us section space_between_sections"
      >
        <h2 className="title_text">Consultas y pedidos</h2>
        <span className="decoration_line"></span>

        <div className="contact-us-content">
          Si tienes alguna pregunta sobre nuestros productos y/o precios o deseas adquirir algún objeto de nuestro catálogo, dirígete a nuestras redes sociales.
        </div>
        <div className="social-media-bar">
          <a href="https://developer.mozilla.org/es/docs/Web/CSS/box-shadow">
            <img
              className="social-media-buttons"
              src={require("./Images/Logo3dreamer.png").default}
              alt=""
            />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Web/CSS/box-shadow">
            <img
              className="social-media-buttons"
              src={require("./Images/Logo3dreamer.png").default}
              alt=""
            />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Web/CSS/box-shadow">
            <img
              className="social-media-buttons"
              src={require("./Images/Logo3dreamer.png").default}
              alt=""
            />
          </a>
        </div>
      </section>

      <section
        id="#products"
        className="products section space_between_sections"
      >
        <h2 className="title_text">Nuestros Productos</h2>
        <span className="decoration_line"></span>
        <CardGroupComponent></CardGroupComponent>
      </section>

      <section
        id="#services"
        className="services section space_between_sections"
      >
        <h2 className="title_text">¿Qué servicios ofrecemos?</h2>
        <span className="decoration_line"></span>
      </section>

      <section id="#about-us" className="about-us section">
        <h2 className="title_text">Sobre Nosotros</h2>
        <span className="decoration_line"></span>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
