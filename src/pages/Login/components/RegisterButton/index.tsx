import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ExtendedTheme} from '../../../../utils/theme';
import Text from '../../../../components/Text';

export const RegisterButton = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = getStyles(colors);
  return (
    <TouchableOpacity
      testID="button-register"
      style={styles.gap}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Register')}>
      <Text style={styles.text}>
        Don't have an account?{' '}
        <Text style={styles.textRegister}>Register!</Text>
      </Text>
    </TouchableOpacity>
  );
};

const getStyles = (colors: ExtendedTheme['colors']) =>
  StyleSheet.create({
    container: {
      padding: 10,
    },
    gap: {
      marginTop: 6,
    },
    text: {textAlign: 'center', color: colors.text, padding: 8},
    textRegister: {color: colors.primary, fontWeight: '600'},
  });

export default RegisterButton;
