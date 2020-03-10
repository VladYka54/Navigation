import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AppNavigator from './navigation/AppNavigation'


export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
      />
      <AppNavigator />
    </>
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
