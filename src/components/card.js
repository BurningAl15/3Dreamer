import Card from "react-bootstrap/Card";
import JumbotronComponent from "./jumbotron";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

function CardComponent(props) {
  const isProduct = props.cardInfo.isProduct;

  if (isProduct) {
    return (
      <Card>
        <JumbotronComponent
          jumbotron={props.cardInfo.jumbotron}
        ></JumbotronComponent>
        <span className="decoration_line green_line"></span>

        <Card.Body className="align-items-stretch">
          <Card.Title className="content_a title">
            {props.cardInfo.title}
          </Card.Title>
          <div className="row card-info-container">
            <div>
              <Card.Text className="content_c 500">
                Material: {props.cardInfo.description_material}
              </Card.Text>
              <Card.Text className="sizes content_c 500">
                Medidas: largo máx. {props.cardInfo.description_size_width}
              </Card.Text>
              <Card.Text className="height content_c 500">
                ancho máx. {props.cardInfo.description_size_height}
              </Card.Text>
            </div>

            <Card.Text className="price">s./ {props.cardInfo.price}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card className="team-card">
        <Card.Img
          variant="top"
          src={require(`../Images/team/${props.cardInfo.image}.png`).default}
        />

        <span className="decoration_line green_line"></span>

        <Card.Body className="align-items-stretch">
          <Card.Title className="content_a title">
            {props.cardInfo.name}
          </Card.Title>
          <Card.Text className="content_b 600">
            {props.cardInfo.position}
          </Card.Text>

          <div className="card-info-container team-card">
            <a
              href={`mailto: ${props.cardInfo.info_email}`}
              rel="noreferrer"
              target="_blank"
              className="card-text data content_b 500"
            >
              <FontAwesomeIcon className="email" icon={faEnvelopeSquare} />
              {props.cardInfo.info_email}
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=+51${props.cardInfo.info_phone}`}
              rel="noreferrer"
              target="_blank"
              className="card-text data content_b 500"
            >
              <FontAwesomeIcon className="phone" icon={faPhone} />
              {props.cardInfo.info_phone}
            </a>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
export default CardComponent;
