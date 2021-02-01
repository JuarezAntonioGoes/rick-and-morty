import React from "react";
import "./style.css";

export default class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseOver: false };
  }

  eneableDescription = () => {
    this.setState({ mouseOver: true });
  };

  disabledDescription = () => {
    this.setState({ mouseOver: false });
  };

  render() {
    const { mouseOver } = this.state;
    const { gender, species, status } = this.props;
    return (
      <div
        className="character"
        onMouseLeave={this.disabledDescription}
        onMouseOver={this.eneableDescription}
      >
        <img src={this.props.image} alt={this.props.name} />
        <p className="name">{this.props.name}</p>
        {mouseOver && (
          <div className="desciption">
            <p>Gener: {gender}</p>
            <p>Specie: {species}</p>
            <p>Status: {status}</p>
          </div>
        )}
      </div>
    );
  }
}
