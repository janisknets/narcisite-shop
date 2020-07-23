import React, { useState, useEffect } from 'react';
import MovieCard from '../atoms/movieCard';

function Counter() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=a96d8308&type=movie&r=json&s=beautiful')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setMovies(result.Search);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (err) => {
          setIsLoaded(true);
          setError(err);
        },
      );
  }, []);

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div>
      { movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />) }
    </div>
  );
}

export default Counter;
