import React from 'react';
import PropTypes from 'prop-types';

const YearDropdown = ({ onYearSelect }) => {
  const currentYear = new Date().getUTCFullYear();
  const yearArray = Array(currentYear - (currentYear - 30)).fill('').map((v, idx) => currentYear - idx);

  return (
    <div>
      <select onChange={onYearSelect}>
        {
          yearArray.map((curr) => <option value={curr}>{curr}</option>)
        }
      </select>
    </div>
  );
};

YearDropdown.propTypes = {
  onYearSelect: PropTypes.func,
};

YearDropdown.defaultProps = {
  onYearSelect: null,
};

export default YearDropdown;
