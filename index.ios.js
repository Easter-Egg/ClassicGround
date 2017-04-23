/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFBXGOcHrSec5-ivCgRkkuol1Xrot3B1Q",
    authDomain: "plz-perform.firebaseapp.com",
    databaseURL: "https://plz-perform.firebaseio.com",
    projectId: "plz-perform",
    storageBucket: "plz-perform.appspot.com",
    messagingSenderId: "490024477881"
};
const fireabaseApp = firebase.initializeApp(firebaseConfig);

import Splash from './src/components/Splash';
import Login from './src/components/Login';
import Home from './src/components/Home';
import Register from './src/components/Register';

export default class ClassicGround extends Component {

  renderScene(route, navigator) {
    if(route.name == 'splash') {
      return <Splash navigator={navigator}/>
    }
    if(route.name == 'login') {
      return <Login navigator={navigator}/>
    }
    if(route.name == 'home') {
      return <Home navigator={navigator}/>
    }
    if(route.name == 'register') {
      return <Register navigator={navigator}/>
    }
  }

  configureScene(route, routeStack){
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <Navigator
        configureScene={ this.configureScene.bind(this) }
        style={{ flex: 1 }}
        initialRoute={{ name: 'splash' }}
        renderScene={ this.renderScene.bind(this) } />
    );
  }
}

AppRegistry.registerComponent('ClassicGround', () => ClassicGround);
