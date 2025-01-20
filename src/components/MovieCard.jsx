import React from "react";
import "../css/MovieCard.css"

// importing context
import {useMovieContext} from "../contexts/MovieContext"

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
  const favorite = isFavorite(movie.id)
  // Function on favorite button click
  // It will turn the heart into red after clicked
  // and revert to white when it is clicked again
  function onFavoriteClick(e) {
    e.preventDefault()
    if (favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie.title" />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active":""} `} onClick={onFavoriteClick}>
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
