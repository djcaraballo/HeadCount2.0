import React from 'react';
import { shallow, expect, test, describe } from 'enzyme';

import StatCard from './StatCard';

describe('StatCard component', () => {
  test('it should match the snapshot', () => {
    const mockDistrictName = 'Denver';
    const mockDistrictStats = [{ 2004: 0.123, 2005: 0.456, 2006: 0.789 }];
    const expectedId = 12345;
    const wrapper = shallow(
      <StatCard
        districtName={mockDistrictName}
        districtStats={mockDistrictStats}
        id={expectedId}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
