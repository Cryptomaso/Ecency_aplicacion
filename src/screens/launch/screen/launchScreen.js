import React from 'react';
import { View, Appearance } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './launchStyles';

const LaunchScreen = () => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  return (
    <View style={isDarkMode ? styles.darkContainer : styles.container}>
      <LottieView
        style={{ width: 150, height: 150 }}
        source={isDarkMode ? require('./animation-dark.json') : require('./animation-light.json')}
        autoPlay
        loop={false}
      />
    </View>
  );
};

export default LaunchScreen;
