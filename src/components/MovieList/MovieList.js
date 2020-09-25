import React from "react";
import Movie from "../Movie/Movie";
const MovieList = (props) => {
  return (
    <div className='container'>
      {props.movies.map((movie, i) => {
        return (
          <Movie
            key={i}
            image={movie.poster_path}
            overview={movie.overview}
            vote={movie.vote_average}
            title={movie.title}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
