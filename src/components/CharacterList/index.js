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
      </div>
    );
  }
}
