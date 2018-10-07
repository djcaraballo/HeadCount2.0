import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import CardContainer from './CardContainer';
import StatCard from './StatCard';

describe('CardContainer component', () => {

  test('it should match the snapshot', () => {
    const mockdistrictData = [{district: 'Colorado', stats: {2004: 0.123, 2005: 0.456}}, {district: 'Aurora', stats: {2004: 0.789, 2005: 0.101}}]
    const wrapper = shallow(<CardContainer districtData={mockdistrictData} />)

    expect(wrapper).toMatchSnapshot()
  })

  test('it should render all the cards', () => {
    const mockdistrictData = [{district: 'Colorado', stats: {2004: 0.123, 2005: 0.456}}, {district: 'Aurora', stats: {2004: 0.789, 2005: 0.101}}]
    const wrapper = shallow(<CardContainer districtData={mockdistrictData} />)

    expect(wrapper.find(StatCard).length).toEqual(1)
  })
})