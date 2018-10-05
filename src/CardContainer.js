import React from 'react';
import PropTypes from 'prop-types';

import StatCard from './StatCard'

const CardContainer = ({ districtData }) => {
  return(
    <div>
      <StatCard districtData={districtData}/>
    </div>
  )
}

CardContainer.propTypes = {
  districtData: PropTypes.array.isRequired
}

export default CardContainer;