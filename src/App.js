import "./styles.css";
import { useState } from "react";

const movieDictioary = {
  Thriller: [
    { name: "John Wick", rating: "9.5" },
    { name: "Misson Impossible", rating: "9" },
    { name: "See", rating: "9" }
  ],
  Comedy: [
    { name: "Big Ban Theory", rating: "9" },
    { name: "Ted Lasso", rating: "9" },
    { name: "Hera Pheri", rating: "8" }
  ],
  "Sci-fi": [
    { name: "Iron Man", rating: "9.5" },
    { name: "Interstellar", rating: "9" },
    { name: "Lucy", rating: "9" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Thriller");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <img src="img/movie.png" alt="movie-icon" />
      <h1>BingeWatch</h1>
      <p>Checkout my favorite movies/series. Select a genre to get started.</p>
      <ul class="genre">
        {Object.keys(movieDictioary).map((genre) => {
          if (genre === selectedGenre) {
            return (
              <li onClick={() => genreClickHandler(genre)}>
                <button class="selectedGenre">{genre}</button>
              </li>
            );
          } else {
            return (
              <li onClick={() => genreClickHandler(genre)}>
                <button>{genre}</button>
              </li>
            );
          }
        })}
      </ul>
      <hr />
      <ul class="movieList">
        {movieDictioary[selectedGenre].map((movie) => {
          return (
            <li>
              <span class="movieName">{movie.name} </span> <br />
              <span class="movieRating">Rating : {movie.rating}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
