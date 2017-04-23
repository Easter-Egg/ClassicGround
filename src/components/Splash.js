import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Splash extends Component {

	constructor(props){
		super(props);
	}

	async componentWillMount() {
		setTimeout(() => this._navigate(), 2000);
	}

	_navigate() {
		this.props.navigator.replace({
			name: 'login', // Matches route.name
		})
	}

  render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Classic Ground
				</Text>
			</View>
		);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#37B24D',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#EBFEEE',
    fontWeight: '800',
		paddingBottom: 60,
  },
});