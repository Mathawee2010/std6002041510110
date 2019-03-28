import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './Header.js';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Header title="Albums" />
        <Text>Mathawee Phuto #TCT27</Text>
      </View>
    );
  }
} 

