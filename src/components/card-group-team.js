import CardComponent from "./card";
const products = [
  {
    id: "1",
    cardInfo: {
      isProduct: false,
      image: "Nancy Rojas",
      name: "Nancy Rojas",
      position: "Artista 3D",
      info_email: "nancyrs22@hotmail.com",
      info_phone: "972146253",
    },
  },
  {
    id: "2",
    cardInfo: {
      isProduct: false,
      image: "Aldhair Vera",
      name: "Aldhair Vera",
      position: "Programador",
      info_email: "aldhairvera15@gmail.com",
      info_phone: "998381252",
    },
  },
];

function CardGroup_Team_Component() {
  return (
    <div className="services-card-group">
      {products.map((item) => (
        <CardComponent key={item.id} cardInfo={item.cardInfo}></CardComponent>
      ))}
    </div>
  );
}

export default CardGroup_Team_Component;
