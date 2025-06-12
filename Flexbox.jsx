import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
        <View style={styles.redcontainer}/>
        <View style={styles.greencontainer}/>
        <View style={styles.bluecontainer}/>
    </View>
  );
}

export default Flexbox;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1,
        flexDirection: 'column', //main axis
        justifyContent: 'space-between',// main axis
        alignItems: 'center',// cross axis
    },
    redcontainer: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
    },
    greencontainer: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
    },
    bluecontainer: {
        backgroundColor: 'blue',
        height: 100,
        width: 100,
    },
});