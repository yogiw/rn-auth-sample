import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {TextInput} from '../';

describe('Text Input', () => {
  it('should render password correctly', () => {
    render(<TextInput testID="input-password" isPassword={true} />);

    const buttonEye = screen.getByTestId('button-eye');
    const inputPassword = screen.getByTestId('input-password');

    fireEvent.changeText(inputPassword, '123');

    expect(screen.queryByTestId('input-password')).toHaveProp(
      'secureTextEntry',
      true,
    );

    fireEvent.press(buttonEye);

    expect(screen.queryByTestId('input-password')).toHaveProp(
      'secureTextEntry',
      false,
    );
  });
});
