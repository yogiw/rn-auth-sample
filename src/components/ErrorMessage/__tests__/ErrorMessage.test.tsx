import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {ErrorMessage} from '../';

describe('Error message', () => {
  it('should render correctly', () => {
    render(<ErrorMessage>Invalid input!</ErrorMessage>);

    expect(screen.getByTestId('error-message')).toHaveTextContent(
      'Invalid input!',
    );
  });
});
