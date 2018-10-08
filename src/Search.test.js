import React from 'react';
import { shallow, expect, test, describe } from 'enzyme';

import Search from './Search';
import StatCard from './StatCard';

describe('Search component', () => {
  test('it should match the snapshot', () => {
    const mockValue = 'Col';
    const mockHandleChange = jest.fn();
    const mockHandleSubmit = jest.fn();
    const wrapper = shallow(
      <Search
        handleChange={mockHandleChange}
        handleSubmit={mockHandleSubmit}
        inputValue={mockValue}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
