import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { ProductsList } from '../screens/ProductsList.js';
import { getProducts } from '../services/ProductsService.js';
import { StatusBar } from "expo-status-bar";
import { Cart } from './Cart.js';
export function Login ({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#eeeeee"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#eeeeee"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('ProductsList');
        }}
      >Login </Text>
    </TouchableOpacity>

    <TouchableOpacity>
        <Text style={styles.forgot_button}>Sign up</Text>
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
    backgroundColor: "black",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "30%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

