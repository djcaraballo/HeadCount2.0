import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import StatCard from './StatCard';
import { shallow } from 'enzyme';

describe('CardContainer component', () =>  {

  it('should render the StatCard', () => {
    const wrapper = shallow(<CardContainer />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should render all of the StatCards', () => {
    const wrapper = shallow(<CardContainer />);
    const mockCards = [{district: 'Aurora', data: { 2004: 15, 2005: 16}}, {district: 'Denver', data: {2004: 17, 2005: 18}}]
    expect(wrapper.find(StatCard).length).toEqual(2)
  })

});