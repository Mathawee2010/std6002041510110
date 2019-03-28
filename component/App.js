import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './Header.js';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Header title="Albums" />
        <Text>Mathawee Phuto #TCT27</Text>
      </View>
    );
  }
} 

