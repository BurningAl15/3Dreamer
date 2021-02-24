import CardComponent from "./card";

function CardGroupComponent() {
  return (
    <div className="services-card-group row">
      <CardComponent
        cardInfo={{
          image:"1",
          title: "Venta de Modelos impresos 3D",
          description:
            "Si quieres comprar algo pero no sabes exactamente qué, podemos ayudarte desde la conceptualización de tu objeto hasta la impresión, incluyendote en todo el proceso para que aprendas.",
        }}
      ></CardComponent>
      <CardComponent
        cardInfo={{
          image:"2",
          title: "Crea desde 0 a tus manos",
          description:
            "Si quieres comprar algo pero no sabes exactamente qué, podemos ayudarte desde la conceptualización de tu objeto hasta la impresión, incluyendote en todo el proceso para que aprendas.",
        }}
      ></CardComponent>
      <CardComponent
        cardInfo={{
          image:"3",
          title: "Lleva tus creaciones a la vida.",
          description:
            "Sí eres un artista 3d, o encontraste algo que te gustó en internet, podemos imprimirlo para ti e incluso personalizarlo.",
        }}
      ></CardComponent>
    </div>
  );
}

export default CardGroupComponent;
