import React, { Component } from 'react';

import './App.css';
import * as data from './data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';

const districtStats = new DistrictRepository(data);

class App extends Component {
  constructor(data) {
    super(data)
    this.state = {
      districtData: districtStats
    }
  }

  // componentDidMount() {
  //   this.returnCleanData()
  // }

  // returnCleanData = () => {
  //   const districtStats = new DistrictRepository(data);
  //   this.setState({ districtData: districtStats.stats })
  // }

  render() {
    return (
      <div>
        <div>Welcome To Headcount 2.0</div>
        <CardContainer districtData={this.state.districtData}/>
      </div>
    );
  }
}

export default App;
