import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Text from '../../components/Text';
import {useAuthStore} from '../../stores/useAuthStore';
import {ExtendedTheme} from '../../utils/theme';

export const HomeScreen = () => {
  const {logout, username, password} = useAuthStore();
  const {colors} = useTheme();

  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Hai, kamu!</Text>
        <Text style={styles.title}>Iya, kamu...</Text>

        <View style={styles.photoContainer}>
          <Image
            source={require('../../assets/images/dodit.png')}
            style={styles.photo}
          />
          <Text testID="text-username">{username}</Text>
          <Text testID="text-password">{password}</Text>
        </View>

        <Button testID="button-logout" style={styles.gap} onPress={logout}>
          Logout
        </Button>
      </View>
    </View>
  );
};

const getStyles = (colors: ExtendedTheme['colors']) =>
  StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: colors.background,
      height: '100%',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      textAlign: 'center',
    },
    photo: {
      marginTop: 8,
      borderRadius: 10,
      height: 150,
      width: 180,
    },
    photoContainer: {
      alignItems: 'center',
    },
    gap: {
      marginTop: 8,
    },
  });

export default HomeScreen;
