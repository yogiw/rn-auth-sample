import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

export const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        onPress={() => navigation.navigate('Register')}
        title="Register"
      />
    </View>
  );
};

export default LoginScreen;
