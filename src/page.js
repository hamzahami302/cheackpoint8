import React from "react";

const person = [
  {
    name: "Mariem",
    photo:
      "https://blog.interflora.fr/wp-content/uploads/2017/08/Langage-des-fleurs-amour-2.jpg",
    des: "Mariem is a good girl"
  },
  {
    name: "Haamza",
    photo: "https://i.ytimg.com/vi/SRN4GHpP1pU/maxresdefault.jpg",
    des: "Hamza is a ger7"
  },
  {
    name: "Anas",
    photo:
      "https://images.ricardocuisine.com/services/recipes/277x375_8103.jpg",
    des: "Anas is a bakou nawer and gateau"
  }
];

export default class Page extends React.Component {
  state = {
    indice: 0
  };
  render() {
    return (
      <div>
        {person.map((element, index) => (
          <button
            onClick={() => {
              this.setState({ indice: index });
            }}
          >
            {element.name}
          </button>
        ))}
        <div>
          <h1>{person[this.state.indice].name}</h1>
          <img alt="" src={person[this.state.indice].photo} />
          <p>{person[this.state.indice].des}</p>
        </div>
      </div>
    );
  }
}
