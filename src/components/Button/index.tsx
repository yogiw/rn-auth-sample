import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ExtendedTheme} from '../../utils/theme';
import Text from '../Text';

export const Button = ({children, style, ...props}: TouchableOpacityProps) => {
  const {colors} = useTheme();

  const styles = getStyles(colors);
  return (
    <TouchableOpacity
      style={[style, styles.button]}
      activeOpacity={0.8}
      testID="button"
      {...props}>
      <Text style={styles.text} testID="button-text">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const getStyles = (colors: ExtendedTheme['colors']) =>
  StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      borderRadius: 4,
      paddingVertical: 12,
    },
    text: {
      textAlign: 'center',
      color: colors.buttonText,
    },
  });
export default Button;
