import React, { Component } from 'react';

import './App.css';
import {data} from './data/kindergartners_in_full_day_program';

class App extends Component {
  constructor(data) {
    super(data)
    // const { Location, TimeFrame, Data } = data
    this.state = {}
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
