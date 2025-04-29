// ! Drawer配置
import './gesture-handler';
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Index from './src_24_Drawer/index.js';

import {NavigationContainer} from '@react-navigation/native';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    );
  }
}
