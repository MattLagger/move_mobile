import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
import { Profile, isSignedIn, Logout } from '../../../Config/Auth';

class Perfil extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			user: {
				id: '',
				email: '',
				password_digest: '',
				name: '',
				telephone: '',
				cep: '',
				street: '',
				neightborhood: '',
				number: '',
				city: '',
				state: ''
			},
		}
	}
	componentDidMount() {
    Profile().then(resp => this.setState({user: resp.data}))
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>{this.state.user.email}</Text>
			<Text>{this.state.user.name}</Text>
			<Button
				title="Logout"
				onPress={() => Logout().then(() => this.props.navigation.navigate('Auth'))}
			/>
			</View>
		);
}
}

export default Perfil;
