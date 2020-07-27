import React, { useState } from 'react';
import MoviesList from '../molecules/moviesList';
import Search from '../molecules/search';
import YearDropdown from '../molecules/yearDropdown';

function MoviesPage() {
  const [search, setSearch] = useState('');
  const [year, setYearValue] = useState('');
  return (
    <div>
      Below you can see a list of movies.
      <Search onSearch={setSearch} />
      <YearDropdown onYearSelect={(e) => {
        setYearValue(e.target.value);
      }}
      />
      <MoviesList search={search} year={year} />
    </div>
  );
}

export default MoviesPage;
