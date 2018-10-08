import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ districData, handleChange, handleSubmit, inputValue }) => {
  return(
    <form onSubmit={handleSubmit}>
      <input className="search-input" placeholder="Search District" onChange={handleChange} value={inputValue} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}



export default Search;