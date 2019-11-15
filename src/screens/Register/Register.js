import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    register:{
        flex:1
    }
})

 class Register extends Component {
 
  render() {
    return (
      <View style={styles.register}>
        <Text> Register </Text>
      </View>
    );
  }
}
export default Register

