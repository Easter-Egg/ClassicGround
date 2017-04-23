import React, { Component } from 'react';
import Intro from '../../assets/images/intro_icon.png';
import * as firebase from 'firebase';
import * as Auth from '../actions/auth';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = { authenticated: false, email: '' };

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.setState({
          authenticated: !!user,
          email: user.email,
        });
      } else {
        this.props.navigator.replace({
          name: 'login', // Matches route.name
        })
      }
    });
  }

  _handleLogout() {
    Auth.logout();
  }

  render() {
    return (
      <View style={styles.container}>
				<View style={styles.imageContainer}>
          <Image style={styles.image} source={Intro}/>
          <Text style={styles.welcome}>
            Here is Home !
          </Text>
          <Text style={{color: 'white'}}>welcome, {this.state.email} !</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37B24D',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#EBFEEE',
    fontWeight: '800',
  },
  imageContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  formContainer: {
    marginBottom: 5
  }
});