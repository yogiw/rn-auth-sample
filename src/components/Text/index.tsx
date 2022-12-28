import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';
import {ExtendedTheme} from '../../utils/theme';

export const Text = ({style, ...props}: TextProps) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  return <RNText testID="text" style={[styles.text, style]} {...props} />;
};

const getStyles = (theme: ExtendedTheme['colors']) =>
  StyleSheet.create({
    text: {
      color: theme.text,
      fontFamily: 'Poppins-Regular',
    },
  });

export default Text;
