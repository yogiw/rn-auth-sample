import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Text} from '../';

describe('Text', () => {
  it('should render text correctly', () => {
    render(<Text>Hello world</Text>);
    expect(screen.getByTestId('text')).toHaveTextContent('Hello world');
  });
});
