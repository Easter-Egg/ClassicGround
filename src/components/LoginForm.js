import React, { Component } from 'react';
import * as firebase from 'firebase';
import * as Auth from '../actions/auth';

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { emailInput: '', passwordInput: '', error: ''};
    this._handleLogin = this._handleLogin.bind(this);
    this.goSignUp = this.goSignUp.bind(this);
  }

  _handleLogin(event) {
    this.setState({ error: '' });

    let email = this.state.emailInput;
    let password = this.state.passwordInput;

    Auth.login(email, password)
          .then(() => { 
            this.props.navigator.replace({
              name: 'home', // Matches route.name
            }) 
          })
          .catch((error) => {
            if(error) {
              this.setState({error: '이메일 혹은 비밀번호가 틀립니다.', emailInput: '', passwordInput: ''});
            }
          });
  }

  goSignUp(event) {
    this.props.navigator.push({ name: 'register' });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle="light-content"
        />
        {this.state.error ? <View style={styles.errorView}>
          <Text style={styles.errorText}>
            {this.state.error}
          </Text>
        </View> : <View style={styles.emptyView}><Text></Text></View>}
        <TextInput
          returnKeyType="next"
          placeholder="Email" style={ styles.input }
          onSubmitEditing={ () => this.passwordInput.focus() }
          keyboardType="email-address"
          autoCapitalize="none"
          ref={(input) => {this.emailInput = input}}
          onChangeText={(emailInput) => this.setState({emailInput})}
          value={this.state.emailInput}
          autoCorrect={false}/>

        <TextInput
          returnKeyType="go"
          secureTextEntry 
          ref={(input) => {this.passwordInput = input}}
          onChangeText={(passwordInput) => this.setState({passwordInput})}
          value={this.state.passwordInput}
          placeholder="Password" style={ styles.input } />

        <TouchableOpacity style={styles.loginContainer} onPress={this._handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sighUpContainer} onPress={this.goSignUp}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#37B24D',
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#b2f2bb',
    marginBottom: 20,
    color: '#495057',
    paddingHorizontal: 10,
  },
  loginContainer: {
    backgroundColor: '#2b8a3e',
    paddingVertical: 15,
  },
  loginText: {
    textAlign: 'center',
    color: '#EBFEEE',
    fontWeight: '700',
    fontSize: 20,    
  },
  sighUpContainer: {
    paddingVertical: 5,
  },
  signUpText: {
    textAlign: 'center',
    color: '#EBFEEE',
    fontWeight: '700',
    fontSize: 16,    
  },
  errorText: {
    textAlign: 'center',
    fontWeight: '800',
    color: 'white',
    fontSize: 18,
  },
  errorView: {
    backgroundColor: '#E03131',
    opacity: 0.7,
    paddingVertical: 10,
    marginBottom: 20
  },
  emptyView: {
    paddingVertical: 10,
    marginBottom: 20,
    opacity: 0.7,
  }
});