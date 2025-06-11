import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Title from './components/Title';

const Login = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Welcome</Title>
      <TextInput placeholder="Masukan email anda" />
      <TextInput placeholder="Masukan password anda" secureTextEntry={true} />
      <Button text="Sign In" />
      <Button text="Create new account" color="grey" textColor="white" />
      <Button text="Sign in with Google" color="red" textColor="white" />
      <Button text="Sign in with Facebook" color="blue" textColor="white" />
      <Button text="Sign in with Apple" color="black" textColor="white" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});
