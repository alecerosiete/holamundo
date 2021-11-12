import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const date = new Date();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo!</Text>
      <Text style={styles.title}>Version 1.0.6</Text>
      <Text style={styles.title}>{date.toString()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    color: '#fff',
    fontSize: 18,
    
  }
});
