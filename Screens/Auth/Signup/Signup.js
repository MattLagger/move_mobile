import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';


class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Signup!</Text>
		
<Button
		title="Go to Login"
		onPress={() => this.props.navigation.navigate('Login')}
	/>


			</View>
		);
}
}


export default Signup;
