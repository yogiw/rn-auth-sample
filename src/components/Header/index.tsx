import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useColorSchemeStore} from '../../stores/useColorSchemeStore';
import ArrowLeft from '../Assets/ArrowLeft';
import BrightnessHighFill from '../Assets/BrightnessHighFill';
import MoonStars from '../Assets/MoonStars';

export const Header = () => {
  const navigation = useNavigation();
  const {activeScheme, setUserColorScheme} = useColorSchemeStore();

  const canGoBack = useMemo(() => navigation.canGoBack(), [navigation]);

  const handleGoBack = () => {
    if (canGoBack) {
      navigation.goBack();
    }
  };

  const styles = getStyles();
  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        {canGoBack && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleGoBack}
            testID="button-back">
            <ArrowLeft />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        testID="button-color-scheme"
        activeOpacity={0.5}
        onPress={() =>
          setUserColorScheme(activeScheme === 'light' ? 'dark' : 'light')
        }>
        {activeScheme === 'light' ? <MoonStars /> : <BrightnessHighFill />}
      </TouchableOpacity>
    </View>
  );
};

const getStyles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 4,
      paddingVertical: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    backContainer: {
      flex: 1,
      alignItems: 'flex-start',
    },
  });

export default Header;
