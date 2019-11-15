import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    forgot:{
        flex:1
    }
})

 class Forgot extends Component {
 
  render() {
    return (
      <View style={styles.forgot}>
        <Text> Forgot </Text>
      </View>
    );
  }
}
export default Forgot

