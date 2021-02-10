import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Storybook imports
import { getStorybookUI, configure } from '@storybook/react-native';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';

configure(() => {
  require('./src/stories.js'); // we will create this file in the next steps
}, module);

const StorybookUIRoot = getStorybookUI({});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});