import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';

class Catalogo extends React.Component {
	render() {
		return (

			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Catálogo!</Text>
			<Button
				title="Go to Login"
				onPress={() => this.props.navigation.navigate('Login')}
			/>
			</View>
		);
}
}

export default Catalogo;
