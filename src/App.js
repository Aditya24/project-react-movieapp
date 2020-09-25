import React from "react";
import MovieList from "./components/MovieList/MovieList";
import Nav from "./components/Nav/Nav";
import SearchArea from "./components/SearchArea/SearchArea";
import Pagination from "./components/Pagination/Pagination";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchWords: "",
      totalResults: 0,
      currentPage: 1,
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
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
        });
      });
  };

  handelChange = (event) => {
    this.setState({ searchWords: event.target.value });
  };
  nextPage = (pageNumber) => {
    const Url = `https://api.themoviedb.org/3/search/movie?api_key=ec850b3af5cf20fbf44f6c7b18501f80&query=${this.state.searchWords}&page=${pageNumber}`;
    fetch(Url)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };
  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className='movie-container'>
        <Nav />
        <SearchArea
          handelSubmit={this.handelSubmit}
          handelChange={this.handelChange}
        />

        <MovieList movies={this.state.movies} />
        {this.state.totalResults > 20 ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default App;
