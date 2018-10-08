import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input className="search-input" placeholder="Search District" onChange={handleChange} value={inputValue} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Search;
