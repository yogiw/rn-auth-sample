import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import Header from '../../components/Header';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import {useAuthStore} from '../../stores/useAuthStore';
import {validateEmail, validatePassword} from '../../utils/validator';

export const RegisterScreen = () => {
  const {login} = useAuthStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorUsername, setErrorUsername] = useState(false);
  const [isErrorPassword, setErrorPassword] = useState(false);

  const handleChangeUsername = (text: string) => {
    setUsername(text);
    if (isErrorUsername) {
      setErrorUsername(false);
    }
  };

  const handleChangePassword = (text: string) => {
    setPassword(text);
    if (isErrorPassword) {
      setErrorPassword(false);
    }
  };

  const handleLogin = async () => {
    let isValid = true;
    if (!validateEmail(username)) {
      isValid = false;
      setErrorUsername(true);
    }
    if (!validatePassword(password)) {
      isValid = false;
      setErrorPassword(true);
    }

    if (isValid) {
      login(username, password);
    }
  };

  const styles = getStyles();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Create an account</Text>
          <Text style={styles.subtitle}>Start your 30-day free trial.</Text>
        </View>

        <TextInput
          style={styles.gap}
          placeholder="Username"
          isError={isErrorUsername}
          value={username}
          onChangeText={handleChangeUsername}
          testID="input-username"
        />
        {isErrorUsername && (
          <ErrorMessage testID="error-username">
            Must be a valid email address!
          </ErrorMessage>
        )}

        <TextInput
          style={styles.gap}
          placeholder="Password"
          isError={isErrorPassword}
          value={password}
          onChangeText={handleChangePassword}
          isPassword
          testID="input-password"
          maxLength={50}
        />
        {isErrorPassword && (
          <ErrorMessage testID="error-password">
            Minimum 8 chars, contained lowercase, uppercase and number!
          </ErrorMessage>
        )}

        <Button style={styles.gap} onPress={handleLogin} testID="button-login">
          Register
        </Button>
      </View>
    </ScrollView>
  );
};

const getStyles = () =>
  StyleSheet.create({
    container: {
      padding: 10,
    },
    logoContainer: {
      marginTop: 8,
      alignItems: 'center',
    },
    logo: {
      height: 107,
      width: 120,
    },
    gap: {
      marginTop: 8,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      fontFamily: 'Poppins-SemiBold',
    },
    subtitle: {
      fontSize: 12,
    },
  });

export default RegisterScreen;
