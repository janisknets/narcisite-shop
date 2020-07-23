import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (
  {
    movie: {
      Title,
      Poster,
      Year,
      imdbID,
      Type,
    },
  },
) => (
  <div>
    <h1>
      {Title}
      (
      {Type}
      )
    </h1>
    <img src={Poster} alt={Title} />
    <div>{Year}</div>
    <a href={`https://www.imdb.com/title/${imdbID}`}>IMDB Link</a>
  </div>
);

MovieCard.propTypes = {
  movie: {
    Title: PropTypes.string,
    Poster: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Type: PropTypes.string,
  },
};

MovieCard.defaultProps = {
  movie: {
    Title: null,
    Poster: null,
    Year: null,
    imdbID: null,
    Type: null,
  },
};

export default MovieCard;
