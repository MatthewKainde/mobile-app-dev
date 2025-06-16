import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ text, size = 24, color = 'black', style }) => {
  return (
    <Text style={[styles.title, { fontSize: size, color }, style]}>
      {text}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
});