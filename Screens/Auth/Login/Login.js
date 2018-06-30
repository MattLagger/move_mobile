import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
} from 'react-native';
import { LoginAction } from '../../../Config/Auth';


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.SignIn = this.SignIn.bind(this);
	}

	SignIn(){
		const auth = {
			email: this.state.email,
			password: this.state.password,
		}
		LoginAction(auth).then(resp => this.props.navigation.navigate('Home'))
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
			<Text>Login!</Text>
			<TextInput
				style={{height: 40, width: 300}}
				keyboardType='email-address'
				placeholder="Email"
				spellCheck={false}
				onChangeText={(email) => this.setState({email})}
			/>
			<TextInput
				style={{height: 40, width: 300}}
				placeholder="Senha"
				secureTextEntry={true}
				onChangeText={(password) => this.setState({password})}
			/>

		<Button
			title="Entrar"
			onPress={this.SignIn}
		/>


	<Button
		title="Go to Sign Up"
		onPress={() => this.props.navigation.navigate('Signup')}
	/>
	<Button
		title="Go to Home"
		onPress={() => this.props.navigation.navigate('Home')}
	/>


	</View>
		);
}
}


export default Login;
