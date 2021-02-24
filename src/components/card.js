import Card from "react-bootstrap/Card";
import "../styles/card.css";

function CardComponent(props) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={require(`../Images/${props.cardInfo.image}.jpg`).default}/>
     
      <span className="decoration_line green_line"></span>

      <Card.Body className="align-items-stretch">
        <Card.Title>{props.cardInfo.title}</Card.Title>
        <Card.Text>{props.cardInfo.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default CardComponent;
