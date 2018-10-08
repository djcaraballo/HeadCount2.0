import React from 'react';
import PropTypes from 'prop-types';

import './StatCard.css';

const StatCard = ({ districtName, districtYearData, id }) => {
  const districtStats = Object.keys(districtYearData).map((year) => {
    if (districtYearData[year] > 0.5) {
      return (
        <li
          key={id}
          className="greaterThan"
        >
          {year}: {districtYearData[year]}
        </li>
      );
    }
    return (
      <li
        key={id}
        className="lessThan"
      >
        {year}: {districtYearData[year]}
      </li>
    );
  });

  return (
    <div className="stat-card">
      <h2 className="district-name">{districtName}</h2>
      <ul>
        {districtStats}
      </ul>
    </div>
  );
};

StatCard.propTypes = {
  districtName: PropTypes.string.isRequired,
  districtYearData: PropTypes.shape({}).isRequired,
};

export default StatCard;
