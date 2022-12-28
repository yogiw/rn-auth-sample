import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput as Input,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {ExtendedTheme} from '../../utils/theme';
import EyeFill from '../Assets/EyeFill';
import EyeSlashFill from '../Assets/EyeSlashFill';

type Props = TextInputProps & {isError?: boolean; isPassword?: boolean};

export const TextInput = ({style, isError, isPassword, ...props}: Props) => {
  const {colors} = useTheme();
  const [isSecureTextEntry, setSecureTextEntry] = useState(true);
  const styles = getStyles(colors);

  return (
    <View style={[styles.container, style, isError && styles.error]}>
      <Input
        style={styles.input}
        selectionColor={colors.primary}
        placeholderTextColor={colors.placeholderText}
        secureTextEntry={isPassword && isSecureTextEntry}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity
          testID="button-eye"
          activeOpacity={0.8}
          onPress={() => setSecureTextEntry(prev => !prev)}>
          {isSecureTextEntry ? <EyeSlashFill /> : <EyeFill />}
        </TouchableOpacity>
      )}
    </View>
  );
};

const getStyles = (colors: ExtendedTheme['colors']) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.inputBackground,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
    },
    input: {
      color: colors.text,
      flex: 1,
      padding: 0,
    },
    error: {
      borderWidth: 1,
      borderColor: colors.error,
    },
  });

export default TextInput;
