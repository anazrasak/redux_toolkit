import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import MainApp from './src/MainApp';
import 'react-native-gesture-handler'

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MainApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;