import React from 'react';
import PropTypes from 'prop-types';

const CardContainer = (districtData) => {
  return(
    <h2>District</h2>
  )
}

CardContainer.propTypes = {
  districtData: PropTypes.array.isRequired
}

export default CardContainer;