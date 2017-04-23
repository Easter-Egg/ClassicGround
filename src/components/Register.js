import React, { Component } from 'react';
import * as firebase from 'firebase';
import * as Auth from '../actions/auth';
import SignupForm from './SignupForm';


import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';

export default class Register extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{color: 'white'}}>All about Classic</Text>
          <Text style={styles.welcome}>Classic Ground</Text>
        </View>

        <View style={styles.formContainer}>
          <SignupForm navigator={this.props.navigator}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#37B24D',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#EBFEEE',
    fontWeight: '800',
  },
  formContainer: {
    marginBottom: 5
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});