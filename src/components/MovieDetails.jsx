import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../datas";
import "../App.css";

function MovieDetails() {
  console.log(useParams());
  let { id } = useParams();

  console.log(id);

  let movie = data.find((elt) => elt.id === id);
  console.log(movie);
  return (
    <div className="detail-content">
      <h1>{movie.title}</h1>
      <h3>{movie.cast}</h3>
      <p>{movie.category}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerSrc}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default MovieDetails;
