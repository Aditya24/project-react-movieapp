import React from "react";

const Movie = (props) => {
  return (
    <div className='movie'>
      <div className='image-container'>
        {props.image == null ? (
          <img
            src={"https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com"}
            alt='movie_poster'
          />
        ) : (
          <img
            src={`http://image.tmdb.org/t/p/w185${props.image}`}
            alt='movie_poster'
          />
        )}
      </div>
      <div className='movie-info'>
        <h3>{props.title}</h3>
        <span> {props.vote}</span>
      </div>
      <div className='movie-overlay'>
        <h3>Overview:</h3>
        {<p>{props.overview}</p>}
      </div>
    </div>
  );
};

export default Movie;
