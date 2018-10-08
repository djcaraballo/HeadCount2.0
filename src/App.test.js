import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import CardContainer from './CardContainer';

describe('App component', () => {
  test('it should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  test('it should render the CardContainer with the correct props', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CardContainer).prop('districtData')).toEqual([])
  });

  test('it should add districtData to state', () => {
    const wrapper = shallow(<App />);
    const initialState = []
    const mockdistrictData = {district: 'Colorado', stats: {2004: 0.123, 2005: 0.456}}
    const expected = [{district: 'Colorado', stats: {2004: 0.123, 2005: 0.456}}]

    wrapper.setState({ districtData: initialState })
    wrapper.instance().returnCleanData(mockdistrictData)

    expect(wrapper.state('districtData')).toEqual(expected)
    expect(wrapper.state('districtData').length).toEqual(1)
  });

});
