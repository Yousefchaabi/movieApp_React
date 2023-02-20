import React, { useState } from "react";
import { data } from "../datas";
import AddMovie from "./AddMovie";
import MovieItem from "./MovieItem";

import "../App.css";

function MovieList(props) {
  const [movies, setMovies] = useState(data);
  return (
    <div className="movie-list">
      <AddMovie movies={movies} setMovies={setMovies} className="add-button" />
      <div className="movies-container">
        {movies
          .filter((element) =>
            props.searchValue && !props.ratingValue
              ? element.title
                  .toLocaleLowerCase()
                  .includes(props.searchValue.toLocaleLowerCase())
              : props.ratingValue && !props.searchValue
              ? element.rate === props.ratingValue
              : !props.searchValue && !props.ratingValue
              ? element.title
                  .toLocaleLowerCase()
                  .includes(props.searchValue.toLocaleLowerCase())
              : (props.searchValue && props.ratingValue) ||
                (props.ratingValue && props.searchValue)
              ? element.title
                  .toLocaleLowerCase()
                  .includes(props.searchValue.toLocaleLowerCase()) &&
                element.rate === props.ratingValue
              : null
          )
          .map((movie, index) => {
            return (
              <MovieItem
                key={index}
                id={movie.id}
                title={movie.title}
                cover={movie.cover}
                cast={movie.cast}
                rate={movie.rate}
                category={movie.category}
                release={movie.release}
              />
            );
          })}
      </div>
    </div>
  );
}

export default MovieList;
