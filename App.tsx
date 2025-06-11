import React from 'react';
import {View, Text, StyleSheet,Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';

//Komponen adalah fungsi yg mengembalikan JSX
const App = () => {
  return (
    //JSX
    <ScrollView>
      <View>
        <View style={style.container}>
          <Text style={style.text}>Hello World</Text>
        </View>
        <Image style={style.img1} source={require('./assets/rice.jpg')}></Image>
        <Image style={style.img1} source={{uri: 'https://picsum.photos/400/200'}}></Image>
        <Image style={style.img1} source={{uri: ''}}></Image>
        <TextInput placeholder='Masukan nama lengkap anda' style={style.input}></TextInput>
        <TextInput placeholder='Masukan nama lengkap anda' style={style.input}></TextInput>
        <TextInput placeholder='Masukan nama lengkap anda' style={style.input}></TextInput>
      </View>
      <TouchableOpacity style={style.button} activeOpacity={0.5}>
        <Text style={style.buttontext}>Submit</Text>  
      </TouchableOpacity>
    </ScrollView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  img1: {
    width: 400,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    margin: 7, 
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    borderRadius: 20,
  },
});