import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MainAppNav from './screens/MainApp'


export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
      />
      <MainAppNav 
        style={styles.container}
      />
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
