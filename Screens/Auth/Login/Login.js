import React, { Component } from 'react';
import {Button, Text, Item, Form, Label, Input, Container, Content} from 'native-base'

import { LoginAction } from '../../../Config/Auth';


class Login extends Component {
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
			<Container style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
				<Content style={{width: 300}}>
					<Form>
						<Item floatingLabel>
						<Label>Email</Label>
						<Input />
						</Item>
						<Item floatingLabel last>
						<Label>Password</Label>
						<Input />
						</Item>
					</Form>
					<Button block style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('Home')}><Text>Login</Text></Button>
					<Button block style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('Signup')}><Text>Cadastro</Text></Button>
					<Text style={{fontSize: 20, color: '#1F4788', textAlign:'center', marginTop: 15, textDecorationLine: 'underline'}}>Recuperar Senha</Text>
				</Content>
			</Container>
		);
}
}


export default Login;
