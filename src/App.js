import React from "react";
import MovieList from "./components/MovieList/MovieList";
import Nav from "./components/Nav/Nav";
import SearchArea from "./components/SearchArea/SearchArea";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchWords: "",
    };
    this.api_key = process.env.REACT_APP_;
  }
  handelSubmit = (event) => {
    event.preventDefault();
    const Url = `https://api.themoviedb.org/3/search/movie?api_key=ec850b3af5cf20fbf44f6c7b18501f80&query=${this.state.searchWords}`;
    fetch(Url)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results] });
      });
  };

  handelChange = (event) => {
    this.setState({ searchWords: event.target.value });
  };

  render() {
    return (
      <div className='APP'>
        <Nav />
        <SearchArea
          handelSubmit={this.handelSubmit}
          handelChange={this.handelChange}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
export default App;
