import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../atoms/movieCard';

function MoviesList({ search, year }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=a96d8308&r=json&s=${search}&y=${year}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
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
  }, [search, year]);

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
      { Array.isArray(movies) && movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />) }
    </div>
  );
}

MoviesList.propTypes = {
  search: PropTypes.string,
  year: PropTypes.number,
};

MoviesList.defaultProps = {
  search: null,
  year: null,
};

export default MoviesList;
