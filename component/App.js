import React from 'react';
import { Text, View } from 'react-native';
import Header from './Header.js';
import Card from './Card'

class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Albums" />
        <Text>Mathawee Phuto #TCT27</Text>
        <Card />
      </View>
    );
  }
} 
export default App;
