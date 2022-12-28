import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../pages/Login';
import RegisterScreen from '../pages/Register';
import HomeScreen from '../pages/Home';
import type {RootStackParamList} from './types';
import {useColorScheme, View} from 'react-native';
import {theme} from '../utils/theme';
import {useAuthStore} from '../stores/useAuthStore';
import {useColorSchemeStore} from '../stores/useColorSchemeStore';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const scheme = useColorScheme();
  const {_hasHydrated, isAuthenticated} = useAuthStore();
  const {activeScheme, setColorScheme} = useColorSchemeStore();

  useEffect(() => {
    if (scheme) {
      setColorScheme(scheme);
    }
  }, [scheme, setColorScheme]);

  if (!_hasHydrated) {
    return <View />;
  }

  return (
    <NavigationContainer theme={theme[activeScheme]}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
