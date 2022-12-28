import React from 'react';
import {HomeScreen} from '../index';
import {fireEvent, render, screen} from '@testing-library/react-native';
import useAuthStore from '../../../stores/useAuthStore';

const mockNavigate = jest.fn();
const mockCanGoBack = jest.fn();
const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
      canGoBack: mockCanGoBack,
      goBack: mockGoBack,
    }),
  };
});

describe('Home Screen', () => {
  it('should render correctly', () => {
    render(<HomeScreen />);
    const mockLogout = jest.fn();
    useAuthStore.setState({
      username: 'melonmusk@gmail.com',
      password: '12345abcdeABCDE',
      logout: mockLogout,
    });

    fireEvent.press(screen.getByTestId('button-logout'));
    expect(mockLogout).toHaveBeenCalled();
  });
});
