import CardComponent from "./card";
const products = [
  {
    id: "1",
    cardInfo: {
      isProduct: true,
      title: "Llavero Paladins Personalizado",
      description_material: "PLA",
      description_size_width: "12 cm",
      description_size_height: "4.1 cm",
      price: "10",
      jumbotron: {
        product: "Llavero1",
        images: [
          {
            id: "1",
            image: "1",
            alt: "1",
          },
          {
            id: "2",
            image: "2",
            alt: "1",
          },
        ],
      },
    },
  },
  {
    id: "2",
    cardInfo: {
      isProduct: true,
      title: "Llavero Grievus Personalizado",
      description_material: "PLA",
      description_size_width: "12 cm",
      description_size_height: "4.1 cm",
      price: "10",
      jumbotron: {
        product: "Llavero2",
        images: [
          {
            id: "1",
            image: "1",
            alt: "1",
          },
          {
            id: "2",
            image: "2",
            alt: "1",
          },
          {
            id: "3",
            image: "3",
            alt: "1",
          },
        ],
      },
    },
  },
  {
    id: "3",
    cardInfo: {
      isProduct: true,
      title: "Llavero Nube Akatsuki Personalizado",
      description_material: "PLA",
      description_size_width: "12 cm",
      description_size_height: "4.1 cm",
      price: "10",
      jumbotron: {
        product: "Llavero3",
        images: [
          {
            id: "1",
            image: "1",
            alt: "1",
          },
          {
            id: "2",
            image: "2",
            alt: "1",
          },
          {
            id: "3",
            image: "3",
            alt: "1",
          },
          {
            id: "4",
            image: "4",
            alt: "1",
          },
        ],
      },
    },
  },
  {
    id: "4",
    cardInfo: {
      isProduct: true,
      title: "Llavero Overwatch Personalizado",
      description_material: "PLA",
      description_size_width: "12 cm",
      description_size_height: "4.1 cm",
      price: "10",
      jumbotron: {
        product: "Llavero4",
        images: [
          {
            id: "1",
            image: "1",
            alt: "1",
          },
          {
            id: "2",
            image: "2",
            alt: "1",
          },
          {
            id: "3",
            image: "3",
            alt: "1",
          },
        ],
      },
    },
  },
  {
    id: "5",
    cardInfo: {
      isProduct: true,
      title: "Llavero C3PO Personalizado",
      description_material: "PLA",
      description_size_width: "12 cm",
      description_size_height: "4.1 cm",
      price: "10",
      jumbotron: {
        product: "Llavero5",
        images: [
          {
            id: "1",
            image: "1",
            alt: "1",
          },
          {
            id: "2",
            image: "2",
            alt: "1",
          },
          {
            id: "3",
            image: "3",
            alt: "1",
          },
          {
            id: "4",
            image: "4",
            alt: "1",
          },
        ],
      },
    },
  },
  {
    id: "6",
    cardInfo: {
      isProduct: true,
      title: "Llavero StormTrooper Personalizado",
      description_material: "PLA",
      description_size_width: "12 cm",
      description_size_height: "4.1 cm",
      price: "10",
      jumbotron: {
        product: "Llavero6",
        images: [
          {
            id: "1",
            image: "1",
            alt: "1",
          },
          {
            id: "2",
            image: "2",
            alt: "1",
          },
          {
            id: "3",
            image: "3",
            alt: "1",
          },
        ],
      },
    },
  },
  {
    id: "7",
    cardInfo: {
      isProduct: true,
      title: "Separador de libros - Chimuelo",
      description_material: "PLA",
      description_size_width: "12 cm",
      description_size_height: "4.1 cm",
      price: "10",
      jumbotron: {
        product: "Separador1",
        images: [
          {
            id: "1",
            image: "1",
            alt: "1",
          },
          {
            id: "2",
            image: "2",
            alt: "1",
          },
          {
            id: "3",
            image: "3",
            alt: "1",
          },
          {
            id: "4",
            image: "4",
            alt: "1",
          },
          {
            id: "5",
            image: "4",
            alt: "1",
          },
        ],
      },
    },
  },
  {
    id: "8",
    cardInfo: {
      isProduct: true,
      title: "Separador de libros - Chimuelo",
      description_material: "PLA",
      description_size_width: "12 cm",
      description_size_height: "4.1 cm",
      price: "10",
      jumbotron: {
        product: "Separador2",
        images: [
          {
            id: "1",
            image: "1",
            alt: "1",
          },
          {
            id: "2",
            image: "2",
            alt: "1",
          },
          {
            id: "3",
            image: "3",
            alt: "1",
          },
          {
            id: "4",
            image: "4",
            alt: "1",
          },
          {
            id: "5",
            image: "5",
            alt: "1",
          },
        ],
      },
    },
  },
  {
    id: "9",
    cardInfo: {
      isProduct: true,
      title: "Placa para Perro Personalizada",
      description_material: "PLA",
      description_size_width: "12 cm",
      description_size_height: "4.1 cm",
      price: "10",
      jumbotron: {
        product: "PlacaPerro",
        images: [
          {
            id: "1",
            image: "1",
            alt: "1",
          },
          {
            id: "2",
            image: "2",
            alt: "1",
          },
          {
            id: "3",
            image: "3",
            alt: "1",
          },
          {
            id: "4",
            image: "4",
            alt: "1",
          },
          {
            id: "5",
            image: "5",
            alt: "1",
          },
        ],
      },
    },
  },
  {
    id: "10",
    cardInfo: {
      isProduct: true,
      title: "Placa para Perro Personalizada",
      description_material: "PLA",
      description_size_width: "12 cm",
      description_size_height: "4.1 cm",
      price: "10",
      jumbotron: {
        product: "PlacaPerro2",
        images: [
          {
            id: "1",
            image: "1",
            alt: "1",
          },
        ],
      },
    },
  },
  {
    id: "11",
    cardInfo: {
      isProduct: true,
      title: "Base para Audífonos",
      description_material: "PLA",
      description_size_width: "12 cm",
      description_size_height: "4.1 cm",
      price: "10",
      jumbotron: {
        product: "StandAudifono",
        images: [
          {
            id: "1",
            image: "1",
            alt: "1",
          },
          {
            id: "2",
            image: "2",
            alt: "1",
          },
        ],
      },
    },
  },
];

function CardGroupComponent() {
  return (
    <ul className="services-card-group row">
      {products.map((item) => (
        <CardComponent key={item.id} cardInfo={item.cardInfo}></CardComponent>
      ))}
    </ul>
  );
}

export default CardGroupComponent;
