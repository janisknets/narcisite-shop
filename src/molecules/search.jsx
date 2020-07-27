import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSearch }) => {
  const [userInput, setUserInput] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="search title"
        value={userInput}
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      />
      <button type="button" onClick={() => onSearch(userInput)}>
        Search
      </button>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

Search.defaultProps = {
  onSearch: null,
};

export default Search;
