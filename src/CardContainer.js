import React from 'react';
import PropTypes from 'prop-types';

import StatCard from './StatCard';

const CardContainer = (districtData) => {
  return(
    <div>
      <h2>District</h2>
      <StatCard />
    </div>
  )
}

CardContainer.propTypes = {
  districtData: PropTypes.array.isRequired
}

export default CardContainer;