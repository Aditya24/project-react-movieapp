import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import "./App.css";

const api_key = process.env.REACT_APP_API;
const Url = `https://api.themoviedb.org/3/movie/550?api_key=${api_key}`;

const Images = "https://image.tmdb.org/t/p/w1280";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async function () {
      const response = await fetch(Url);
      const movie = response.json();
      console.log(movie);
      setMovies(movie);
    };
    fetchMovies();
  });

  return (
    <div className='App'>
      <Movie />
    </div>
  );
}

export default App;
