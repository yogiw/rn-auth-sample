import {useTheme} from '@react-navigation/native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const EyeFill = () => {
  const {colors} = useTheme();
  return (
    <Svg width="16" height="16" fill={colors.primary} viewBox="0 0 16 16">
      <Path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
      <Path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
    </Svg>
  );
};

export default EyeFill;
