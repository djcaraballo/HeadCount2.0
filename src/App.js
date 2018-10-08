import React, { Component } from 'react';

import './App.css';
import * as data from './data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer';
import Search from './Search';
import DistrictRepository from './helper';

const districtStats = new DistrictRepository(data);

class App extends Component {
  constructor(data) {
    super(data);
    this.state = {
      districtData: districtStats,
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      inputValue: value,
    });
  }

  handleSubmit(event) {
    const { inputValue } = this.state;
    event.preventDefault();
    this.setState({
      districtData: districtStats.findAllMatches(inputValue),
    });
  }

  render() {
    const { districtData, inputValue } = this.state;

    return (
      <div>
        <div>Welcome To Headcount 2.0</div>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={inputValue}
        />
        <CardContainer districtData={districtData} />
      </div>
    );
  }
}

export default App;
