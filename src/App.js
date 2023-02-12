import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [ratingValue, setRatingValue] = useState();

  return (
    <div className="container-fluid">
      <NavBar
        setSearchValue={setSearchValue}
        setRatingValue={setRatingValue}
        ratingValue={ratingValue}
      />
      <MovieList searchValue={searchValue} ratingValue={ratingValue} />
    </div>
  );
}

export default App;
