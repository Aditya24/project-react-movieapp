import React from "react";

const Movie = (props) => {
  return (
    <div className='movie'>
      <h1>Movie</h1>
      {props.image == null ? (
        <img
          src={"https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com"}
          alt='movie_poster'
          style={{ width: "100%", height: "350px" }}
        />
      ) : (
        <img
          src={`http://image.tmdb.org/t/p/w185${props.image}`}
          alt='movie_poster'
          style={{ width: "100%", height: "350px" }}
        />
      )}
    </div>
  );
};

export default Movie;
