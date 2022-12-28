import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Button} from '../';

describe('Button', () => {
  it('should render button correctly', () => {
    render(<Button>Hello World</Button>);

    expect(screen.getByTestId('button-text')).toHaveTextContent('Hello World');
  });
});
