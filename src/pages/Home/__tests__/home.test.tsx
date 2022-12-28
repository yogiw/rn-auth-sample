import React from 'react';
import {HomeScreen} from '../index';
import {render, screen} from '@testing-library/react-native';

it('Should render correctly', () => {
  render(<HomeScreen />);

  const text = screen.getByTestId('hello-world');
  expect(text).toHaveTextContent('Hello From Home Screen');
});
