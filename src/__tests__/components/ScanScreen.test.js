import React from 'react';
import { shallow } from 'enzyme';
import ScanScreen from '../../components/screens/ScanScreen';

describe('<ScanScreen />', () => {
  it('正しくレンダリングされていること', () => {
    const wrapper = shallow(<ScanScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
