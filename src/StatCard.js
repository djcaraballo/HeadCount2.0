import React from 'react';
import PropTypes from 'prop-types';

import './StatCard.css'

const StatCard = () => {
  //if li value > 0.5 className="greaterThan"
  //if li value < 0.5 className="lessThan"
  return(
    <div className="stat-card">
      <h2 className="district-name">Denver</h2>
      <ul>
        <li className="greaterThan">2004: 0.987</li>
        <li className="greaterThan">2005: 0.876</li>
        <li className="lessThan">2006: 0.123</li>
        <li className="greaterThan">2007: 0.765</li>
        <li className="lessThan">2008: 0.234</li>
        <li className="greaterThan">2009: 0.876</li>
        <li className="lessThan">2010: 0.123</li>
        <li className="greaterThan">2011: 0.765</li>
        <li className="lessThan">2012: 0.234</li>
      </ul>
    </div>
  )
}

export default StatCard;