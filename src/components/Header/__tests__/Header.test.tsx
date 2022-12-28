import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react-native';
import {Header} from '../';

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

describe('Header', () => {
  it('should render header corectly with can goback = true', () => {
    mockCanGoBack.mockImplementation(() => true);
    render(<Header />);

    const buttonBack = screen.getByTestId('button-back');
    expect(buttonBack).toBeTruthy();
    fireEvent.press(buttonBack);
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('should render header corectly with can goback = false', () => {
    mockCanGoBack.mockImplementation(() => false);
    render(<Header />);

    expect(screen.queryByTestId('button-back')).toBe(null);
  });

  it('should handle color scheme change - default light', () => {
    render(<Header />);

    const buttonColorScheme = screen.getByTestId('button-color-scheme');
    expect(screen.getByTestId('icon-moon')).toBeTruthy();

    act(() => {
      fireEvent.press(buttonColorScheme);
    });

    expect(screen.getByTestId('icon-brightness-full')).toBeTruthy();

    act(() => {
      fireEvent.press(buttonColorScheme);
    });

    expect(screen.getByTestId('icon-moon')).toBeTruthy();
  });
});
