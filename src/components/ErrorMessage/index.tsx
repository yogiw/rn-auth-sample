import React from 'react';
import {StyleSheet} from 'react-native';
import type {TextProps} from 'react-native';
import {ExtendedTheme} from '../../utils/theme';
import {useTheme} from '@react-navigation/native';
import Text from '../Text';

export const ErrorMessage = ({style, ...props}: TextProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  return (
    <Text testID="error-message" style={[styles.text, style]} {...props} />
  );
};

const getStyles = (colors: ExtendedTheme['colors']) =>
  StyleSheet.create({
    text: {
      fontSize: 12,
      color: colors.error,
    },
  });

export default ErrorMessage;
