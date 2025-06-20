import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {Logo, Pic, Return, Profile} from '../../assets/pic.svg';
const SignUp = () => {
  return (
    <View style={styles.pageContainer}> 
      <Header text="<  Sign Up" />
      <Profile />
      <Gap height={40} />
      <Logo style={styles.addImage}/>
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <TextInput
          text="Full Name"
          placeholder="Enter your full name" />
        <Gap height={26} />
        <TextInput
          text="Email Address"
          placeholder="Enter your email address"
        />
        <Gap height={16} />
        <TextInput text="Password" placeholder="Enter your password" />
        <Gap height={24} />
        <Button text="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
  },
  addImage : {
    alignSelf: 'center',
  },
});