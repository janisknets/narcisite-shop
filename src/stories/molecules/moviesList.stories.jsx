import React from 'react';
// import { action } from '@storybook/addon-actions';
import MoviesList from '../../molecules/moviesList';

export default {
  title: 'Molecules/MoviesList',
  component: MoviesList,
};

export const MoviesListLoading = () => <MoviesList />;
export const MoviesListHello = () => <MoviesList search="Hello" />;
export const MoviesListYear = () => <MoviesList search="Hello" year="2019" />;
