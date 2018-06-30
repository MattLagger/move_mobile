import React, { Component } from 'react';
import {ImageBackground, Image} from 'react-native'
import {Button, Text, Item, Form, Label, Input, Container, Content} from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

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
			<Container>
				<ImageBackground 
					source={require('../../../Assets/bg.jpg')}
					blurRadius={3}
					style={{
						width: '100%', 
						height: '100%',
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
					>
					<LinearGradient colors={['rgba(15, 33, 64, 0.8)', 'rgba(52, 120, 229, 0.6)']}>
						<Content style={{width: '100%', padding: '15%'}}>
							<Image style={{flex: 1, width: 300}} resizeMode='contain' source={require('../../../Assets/logo.png')}/>
							<Form>
								<Item floatingLabel last>
								<Label style={{color: '#fff'}}>Email</Label>
								<Input 
									style={{color: "white"}}
								/>
								</Item>
								<Item floatingLabel last>
								<Label style={{color: '#fff'}}>Senha</Label>
								<Input 
									style={{color: "white"}}
								/>
								</Item>
							</Form>
							<Button light bordered block style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('Home')}><Text>Login</Text></Button>
							<Button light bordered block style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('Signup')}><Text>Cadastro</Text></Button>
							<Text style={{fontSize: 20, color: '#fff', textAlign:'center', marginTop: 15, textDecorationLine: 'underline'}}>Recuperar Senha</Text>
						</Content>
					</LinearGradient>
				</ImageBackground>
			</Container>
		);
}
}


export default Login;
