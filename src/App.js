import React, { Component } from 'react';
import CardContainer from './CardContainer';

import './App.css';
import data from './data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';

class App extends Component {
  constructor(data) {
    super(data)
    // const { Location, TimeFrame, Data } = data
    this.state = {
      districtData: []
    }
  }

  componentDidMount() {
    this.returnCleanData()
  }

  returnCleanData() {
    const districtStats = new DistrictRepository(data);
    console.log(districtStats)
    this.setState({
      districtData: districtStats.stats
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <CardContainer districtData={this.state.districtData}/>
      </div>

    );
  }
}

export default App;
