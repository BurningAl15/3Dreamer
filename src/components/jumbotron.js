import Carousel from "react-bootstrap/Carousel";
// import CarouselImageCover from "../Images/3DreamerCover.png";
// import CarouselImage1 from "../Images/1.jpg";
// import CarouselImage2 from "../Images/2.jpg";
// import CarouselImage3 from "../Images/3.jpg";

function JumbotronComponent(props) {
  const product = props.jumbotron.product;

  return (
    <Carousel>
      {props.jumbotron.images.map((item) => (
        // Sin el prop 'key', React disparará una advertencia de key
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            // src={CarouselImageCover}
            src={
              require(`../Images/products/${product}/${item.image}.png`).default
            }
            alt={item.alt}
          />
          <Carousel.Caption>
            {/* <h3>Collage de productos</h3>
          <p>Algunos de nuestros productos</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default JumbotronComponent;
