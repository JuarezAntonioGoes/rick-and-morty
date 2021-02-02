import "./App.css";
import React from "react";
import CharacterList from "./components/CharacterList";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterList: [],
      link: "https://rickandmortyapi.com/api/character/",
      proxNavigation: "https://rickandmortyapi.com/api/character/",
      loading: false,
      resultsLength: 0,
      displayResultsLength: false,
    };
  }

  async handleFetch(URL) {
    if (this.timeAlert) {
      clearTimeout(this.timeAlert);
    }

    this.setState({ loading: true, displayResultsLength: false });
    const result = await fetch(URL);
    const JSON = await result.json();
    await this.handleSetStates(JSON);
  }

  handleSetStates = (JSON) => {
    this.setState(
      {
        characterList: [...JSON.results],
        proxNavigation: JSON.info,
        loading: false,
        resultsLength: JSON.results.length,
        displayResultsLength: true,
      },
      () => {
        if (this.state.displayResultsLength) {
          this.timeAlert = setTimeout(() => {
            this.setState({ displayResultsLength: false });
          }, 2000);
        }
      }
    );
  };

  componentDidMount() {
    const { link } = this.state;
    this.handleFetch(link);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.link !== this.state.link) {
      this.handleFetch(this.state.link);
    }
  }

  prevPage = () => {
    const { prev } = this.state.proxNavigation;

    if (prev) {
      this.setState({ link: prev });
    }
  };

  nextPage = () => {
    const { next } = this.state.proxNavigation;

    if (next) {
      this.setState({ link: next });
    }
  };

  closeResultsLength = () => {
    this.setState({ displayResultsLength: false });
  };

  render() {
    const {
      characterList,
      loading,
      resultsLength,
      displayResultsLength,
    } = this.state;
    return (
      <div className="App">
        {displayResultsLength && (
          <div className="length--person">
            {resultsLength} personagens listados{" "}
            <img
              onClick={this.closeResultsLength}
              className="button-close"
              src="https://contmoura.com.br/wp-content/uploads/2019/09/x-png-icon-8.png"
              alt="close"
            />
          </div>
        )}

        <div className="pagination">
          <button onClick={this.prevPage}>
            <BsChevronLeft />
          </button>
          <button onClick={this.nextPage}>
            <BsChevronRight />
          </button>
        </div>
        {loading ? (
          <div className="loading"></div>
        ) : (
          <CharacterList list={characterList} />
        )}
      </div>
    );
  }
}

export default App;
