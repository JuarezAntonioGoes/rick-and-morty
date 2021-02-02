import { Component } from "react";
import Character from "../Character";

export default class CharacterList extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
<<<<<<< HEAD
        {this.props.list.map(
          ({ name, image, gender, species, status }, index) => (
            <Character
              key={index}
              name={name}
              image={image}
              gender={gender}
              species={species}
              status={status}
            />
          )
        )}
=======
        {this.props.list.map(({ name, image, gender, species, status }) => (
          <Character
            key={name}
            name={name}
            image={image}
            gender={gender}
            species={species}
            status={status}
          />
        ))}
>>>>>>> 54d4d45ca019110ebdb49b4d828764bb864fced4
      </div>
    );
  }
}
