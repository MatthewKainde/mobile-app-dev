import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ children, size = 24, color = 'black', style }) => {
  return (
    <Text style={[styles.title, { fontSize: size, color }, style]}>
      {children}
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
