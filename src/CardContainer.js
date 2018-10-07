import React from 'react';
import PropTypes from 'prop-types';

import StatCard from './StatCard';
import './CardContainer.css'

const CardContainer = (districtData) => {
  // const districtName
  // const districtStats
  // const cardId

  return(
    <div className="card-container">
      <h2>District</h2>
      <div className="card-wrapper">
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
        <StatCard 
          // districtName={districtName} 
          // districtStats={districtStats}
          // id={cardId}
        />
      </div>
    </div>
  )
}

CardContainer.propTypes = {
  districtData: PropTypes.array.isRequired
}

export default CardContainer;