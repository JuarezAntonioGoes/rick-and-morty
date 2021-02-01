import "./App.css";
import React from "react";
import CharacterList from "./components/CharacterList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterList: [],
    };
  }

  async componentDidMount() {
    const result = await fetch("https://rickandmortyapi.com/api/character/");
    const JSON = await result.json();
    this.setState({ characterList: [...JSON.results] });
  }

  render() {
    const { characterList } = this.state;
    return (
      <div className="App">
        <CharacterList list={characterList} />
      </div>
    );
  }
}

export default App;
