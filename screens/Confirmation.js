import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {name} from './Checkout';
export function Confirmation({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Order Confirmed!👍
        {'\n'} Thank you {name}for shopping with us
      </Text>
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
  text:{
    fontSize:20,
    textAlign: "center"
  }
});
