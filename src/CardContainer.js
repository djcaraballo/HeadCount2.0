import React from 'react';
import PropTypes from 'prop-types';

import StatCard from './StatCard';

const CardContainer = (districtData) => {
  // const districtName
  // const districtStats
  // const cardId

  return(
    <div>
      <h2>District</h2>
      <StatCard 
        // districtName={districtName} 
        // districtStats={districtStats}
        // id={cardId}
      />
    </div>
  )
}

CardContainer.propTypes = {
  districtData: PropTypes.array.isRequired
}

export default CardContainer;