import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () =>  {

  it('should render the card container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a default state length of 181', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('districtData').length).toEqual(181)
  })

});
