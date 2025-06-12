import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.mainscreen}>
      <View style={styles.top}>
        <View style={styles.blackbox} />
        <View style={styles.yellowbox} />
        <View style={styles.blackbox} />
      </View>

      <View>
        <Image source={require('./assets/unklab.png')}style={styles.logo}/>
      </View>

      <View style={styles.bot}>
        <View style={styles.blackbox} />
        <View style={styles.yellowbox} />
        <View style={styles.blackbox} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  mainscreen: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  top: {
    backgroundColor: 'red',
    width: '100%',
    height: 110,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bot: {
    backgroundColor: 'blue',
    width: '100%',
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  blackbox: {
    backgroundColor: 'black',
    width: 70,
    height: 70,
    marginHorizontal: 15,
  },
  yellowbox: {
    backgroundColor: 'yellow',
    width: 70,
    height: 70,
  },
  logo: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});
