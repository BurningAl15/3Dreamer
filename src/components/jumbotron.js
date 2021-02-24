import Carousel from "react-bootstrap/Carousel";

import "../styles/jumbotron.css";

import CarouselImageCover from "../Images/3DreamerCover.png";
import CarouselImage1 from "../Images/1.jpg";
import CarouselImage2 from "../Images/2.jpg";
import CarouselImage3 from "../Images/3.jpg";

function JumbotronComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImageCover}
          alt="Collage de productos"
        />
        <Carousel.Caption>
          {/* <h3>Collage de productos</h3>
          <p>Algunos de nuestros productos</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImage1}
          alt="Separador de libros y Modelo de Chimuelo"
        />
        <Carousel.Caption>
          {/* <h3>Separador de libros y Modelo de Chimuelo</h3>
          <p>
            Separador de libros y Modelo, ambos de Chimuelo de ¿Cómo entrenar a
            tu dragón?
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImage2}
          alt="Separador de libros y Modelo de Chimuelo 2"
        />

        <Carousel.Caption>
          {/* <h3>Separador de libros y Modelo de Chimuelo 2</h3>
          <p>Separador de libros y Modelo, ambos de Chimuelo de ¿Cómo entrenar a tu dragón?</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImage3}
          alt="Llavero de Stormtrooper con nombre personalizado"
        />

        <Carousel.Caption>
          {/* <h3>Llavero de Stormtrooper con nombre personalizado</h3>
          <p>
            Llavero de Stormtrooper con nombre personalizado
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default JumbotronComponent;
