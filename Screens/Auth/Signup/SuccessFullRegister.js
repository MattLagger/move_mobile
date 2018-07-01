import React, { Component } from 'react';
import {Text, Container, Content, H1, H3} from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

export default class Signup extends Component {
	render() {
		return (
			<Container>
				<LinearGradient style={{flex: 1, alignItems: 'center', justifyContent:'center'}} colors={['rgba(29, 67, 127, 1)', 'rgba(15, 33, 64, 1)']} >
					<Content style={{width: 300, marginTop: 200}}>
					<H1 style={{textAlign: 'center', marginTop: 30, color: '#fff'}}>Bem Vindo a Catraia.</H1>
					<H3 style={{textAlign: 'center', marginTop: 30, color: '#fff'}}>Cadastro Concluido Com Sucesso.</H3>
					<Text onPress={() => this.props.navigation.navigate('Login')} style={{fontSize: 20, color: '#fff', textAlign:'center', marginTop: 15, textDecorationLine: 'underline'}}>Fazer Login</Text>
					</Content>
				</LinearGradient>
			</Container>
		);
}
}