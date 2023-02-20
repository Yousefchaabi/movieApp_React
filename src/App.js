import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";

import MovieList from "./components/MovieList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import PublicLayout from "./components/PublicLayout";
import Login from "./components/Login";
import Register from "./components/Register";
import MovieDetails from "./components/MovieDetails";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [ratingValue, setRatingValue] = useState();

  return (
    <div className="container-fluid">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              setSearchValue={setSearchValue}
              setRatingValue={setRatingValue}
              ratingValue={ratingValue}
            />
          }
        >
          <Route index element={<Home />} />
          <Route
            path="movies"
            element={
              <PrivateRoute>
                <MovieList
                  searchValue={searchValue}
                  ratingValue={ratingValue}
                />
              </PrivateRoute>
            }
          />
          <Route path="movie/:id" element={<MovieDetails />} />
        </Route>
        <Route path="/" element={<PublicLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
