import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Cart } from './Cart';
export function Checkout ({navigation}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("")


  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Full Name"
          placeholderTextColor="#eeeeee"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Pone Number"
          placeholderTextColor="#eeeeee"
          secureTextEntry={true}
          onChangeText={(number) => setNumber(number)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address Line 1"
          placeholderTextColor="#eeeeee"
          secureTextEntry={true}
          onChangeText={(address) => setAddress(address)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address Line 2"
          placeholderTextColor="#eeeeee"
          secureTextEntry={true}
          onChangeText={(address) => setAddress(address)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address Line 3"
          placeholderTextColor="#eeeeee"
          secureTextEntry={true}
          onChangeText={(address) => setAddress(address)}
        />
      </View>

      
      <TouchableOpacity style={styles.checkBtn}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Confirmation');
        }}
      >Checkout </Text>
    </TouchableOpacity>

    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    borderColor: "black",
    backgroundColor: "black",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 30,

    alignItems: "center",
  },

  TextInput: {
    color: "white",
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  checkBtn: {
    width: "30%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    backgroundColor: "black",
  },
  text: {
    textAlign: "left",
    color: 'white',
    fontWeight: 'bold',
  },
});

