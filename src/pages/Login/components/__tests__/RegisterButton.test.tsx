import React from 'react';
import {RegisterButton} from '../RegisterButton';
import {fireEvent, render, screen} from '@testing-library/react-native';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

it('should navigate to register', () => {
  render(<RegisterButton />);

  const button = screen.getByTestId('button-register');
  fireEvent.press(button);
  expect(mockNavigate).toHaveBeenCalled();
});
