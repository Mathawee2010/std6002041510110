import React from 'react';
import { Text, View } from 'react-native';
import Header from './Header.js';
import Card from './Card'
import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Login" />
        <Login />
      </View>
    );
  }
} 
export default App;