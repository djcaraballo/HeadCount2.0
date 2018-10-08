import React from 'react';
import PropTypes from 'prop-types';

import StatCard from './StatCard';
import './CardContainer.css';

const CardContainer = ({ districtData }) => {
  const { stats } = districtData;

  const statCards = stats.map((districtStat, index) => {
    const districtName = districtStat.district;
    const districtYearData = { ...districtStat.stats };
    const id = Date.now + index;

    return (
      <StatCard
        id={id}
        districtName={districtName}
        districtYearData={districtYearData}
      />
    );
  });

  return (
    <div className="card-container">
      <h2>District</h2>
      <div className="card-wrapper">
        {statCards}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  districtData: PropTypes.shape({}).isRequired,
};

export default CardContainer;
