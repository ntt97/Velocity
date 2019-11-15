import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    setting:{
        flex:1
    }
})

 class Setting extends Component {
 
  render() {
    return (
      <View style={styles.setting}>
        <Text> Setting </Text>
      </View>
    );
  }
}
export default Setting

