import React from 'react';
import ReactDOM from 'react-dom';
import StatCard from './StatCard';
import { shallow } from 'enzyme';

describe('StatCard component', () =>  {

  it('should render to the DOM', () => {
    const wrapper = shallow(<StatCard />);
    expect(wrapper).toMatchSnapshot();
  })

});