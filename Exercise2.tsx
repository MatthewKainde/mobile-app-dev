import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.header}>Biodata</Text>
      </View>

      <Image style={style.img1} source={require('./assets/profile.jpg')} />

      <View style={style.biodataContainer}>
        <Text style={style.biodataText}>Nama: Matthew Kainde</Text>
        <Text style={style.biodataText}>Umur: 19 Tahun</Text>
        <Text style={style.biodataText}>Kuliah: Universitas Klabat</Text>
        <Text style={style.biodataText}>Prodi: Informatika</Text>
        <Text style={style.biodataText}>Hobi: Bermain Game</Text>
        <Text style={style.biodataText}>Tempat Tinggal: Asrama Guest House</Text>
      </View>

      <TouchableOpacity style={style.button} activeOpacity={0.7}>
        <Text style={style.buttontext}>Lihat Biodata</Text>
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
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  img1: {
    width: 125,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    margin: 7,
    alignSelf: 'center',
  },
  biodataContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  biodataText: {
    fontSize: 18,
    marginVertical: 5,
    color: 'black',
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
    fontSize: 20,
  },
});
