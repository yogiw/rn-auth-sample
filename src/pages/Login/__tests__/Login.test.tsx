import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {LoginScreen} from '../';

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

describe('Login Screen', () => {
  it('should render correctly', () => {
    render(<LoginScreen />);

    expect(screen.getByTestId('button-login')).toBeTruthy();
    expect(screen.getByTestId('button-register')).toBeTruthy();
    expect(screen.getByTestId('input-username')).toBeTruthy();
    expect(screen.getByTestId('input-password')).toBeTruthy();
  });

  it('should show error when email & password invalid - short password', () => {
    render(<LoginScreen />);

    const inputUsername = screen.getByTestId('input-username');
    const inputPassword = screen.getByTestId('input-password');
    const buttonLogin = screen.getByTestId('button-login');

    // Error msg not rendered
    expect(screen.queryByTestId('error-username')).toBe(null);
    expect(screen.queryByTestId('error-password')).toBe(null);

    fireEvent.changeText(inputUsername, 'invalidEmail@');
    fireEvent.changeText(inputPassword, 'short');

    fireEvent.press(buttonLogin);

    expect(screen.getByTestId('error-username')).toBeTruthy();
    expect(screen.getByTestId('error-password')).toBeTruthy();

    // Reset error message
    fireEvent.changeText(inputUsername, 'reset');
    fireEvent.changeText(inputPassword, 'reset');
    expect(screen.queryByTestId('error-username')).toBe(null);
    expect(screen.queryByTestId('error-password')).toBe(null);
  });

  it('should show error when password invalid - not contain uppercase', () => {
    render(<LoginScreen />);

    const inputPassword = screen.getByTestId('input-password');
    const buttonLogin = screen.getByTestId('button-login');

    expect(screen.queryByTestId('error-password')).toBe(null);

    fireEvent.changeText(inputPassword, 'onlylowercaseandnumbers1');
    fireEvent.press(buttonLogin);

    expect(screen.getByTestId('error-password')).toBeTruthy();
  });

  it('should show error when password invalid - not contain lowercase', () => {
    render(<LoginScreen />);

    const inputPassword = screen.getByTestId('input-password');
    const buttonLogin = screen.getByTestId('button-login');

    expect(screen.queryByTestId('error-password')).toBe(null);

    fireEvent.changeText(inputPassword, 'ONLYUPPERCASEANDNUMBERS1');
    fireEvent.press(buttonLogin);

    expect(screen.getByTestId('error-password')).toBeTruthy();
  });

  it('should show error when password invalid - not contain number', () => {
    render(<LoginScreen />);

    const inputPassword = screen.getByTestId('input-password');
    const buttonLogin = screen.getByTestId('button-login');

    expect(screen.queryByTestId('error-password')).toBe(null);

    fireEvent.changeText(inputPassword, 'ONLYUPPERandlower');
    fireEvent.press(buttonLogin);

    expect(screen.getByTestId('error-password')).toBeTruthy();
  });

  it('should login user when username and password valid', () => {
    render(<LoginScreen />);

    const inputUsername = screen.getByTestId('input-username');
    const inputPassword = screen.getByTestId('input-password');
    const buttonLogin = screen.getByTestId('button-login');

    fireEvent.changeText(inputUsername, 'hello@app.com');
    fireEvent.changeText(inputPassword, 'secureP4ssword');

    fireEvent.press(buttonLogin);

    expect(screen.queryByTestId('error-username')).toBe(null);
    expect(screen.queryByTestId('error-password')).toBe(null);
  });
});
