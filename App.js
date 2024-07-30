import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/components/screens/MainScreen';
import { FontLoader } from './src/helper/FontLoader';
import AppNavigation from './src/components/ui/navigation/AppNavigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    }
  }

  async componentDidMount() {
    await FontLoader(); // Вызываем функцию загрузки шрифтов
    this.setState({ fontsLoaded: true });
  }
  
  render() {
    return (
      <AppNavigation/>
    );
  }
};

export default App;