import React, { Component } from 'react';
import Intro from '../../assets/images/intro_icon.png';
import LoginForm from './LoginForm';

import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.imageContainer}>
          <Image style={styles.image} source={Intro}/>
          <Text style={styles.welcome}>
            Classic Ground
          </Text>
        </View>

        <View style={styles.formContainer}>
          <LoginForm navigator={this.props.navigator}/>
        </View>
      </KeyboardAvoidingView>
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