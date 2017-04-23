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

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { emailInput: '', passwordInput: '', passwordCheck: '', error: ''};
    this._handleSignUp = this._handleSignUp.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  _handleSignUp(event) {
    this.setState({ error: '' });

    let email = this.state.emailInput;
    let password = this.state.passwordInput;
    let passwordCheck = this.state.passwordCheck;

    if(password === passwordCheck) {
      console.log(email, password, passwordCheck);
      Auth.signUp(email, password)
        .then((data) => {
          if(data.code === 'auth/weak-password')
            this.setState({error: '비밀번호의 보안강도가 약합니다'});

          if(data.code === 'auth/email-already-in-use')
            this.setState({error: '이미 존재하는 사용자입니다'})

          if(data.email)
            this.props.navigator.replace({ name: 'home' });
        });
    }

    else
      this.setState({ error: '비밀번호가 일치하지 않습니다.' });
  }

  goBack(event) {
    this.props.navigator.pop();
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
          returnKeyType="next"
          secureTextEntry 
          ref={(input) => {this.passwordInput = input}}
          onChangeText={(passwordInput) => this.setState({passwordInput})}
          value={this.state.passwordInput}
          placeholder="Password" style={ styles.input } />

        <TextInput
          returnKeyType="go"
          secureTextEntry 
          ref={(input) => {this.passwordCheck = input}}
          onChangeText={(passwordCheck) => this.setState({passwordCheck})}
          value={this.state.passwordCheck}
          placeholder="Repeat Password" style={ styles.input } />

        <TouchableOpacity style={styles.signupContainer} onPress={this._handleSignUp}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backContainer} onPress={this.goBack}>
          <Text style={styles.backText}>Back</Text>
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
  signupContainer: {
    backgroundColor: '#2b8a3e',
    paddingVertical: 15,
  },
  signupText: {
    textAlign: 'center',
    color: '#EBFEEE',
    fontWeight: '700',
    fontSize: 20,    
  },
  backContainer: {
    paddingVertical: 5,
  },
  backText: {
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