import React, { Component } from 'react';
import {Button, Text, Item, Form, Label, Input, Container, Content, H1} from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

export default class Signup extends Component {
	render() {
		return (
			<Container>
				<LinearGradient style={{flex: 1, alignItems: 'center', justifyContent:'center'}} colors={['rgba(15, 33, 64, 1)', 'rgba(29, 67, 127, 1)']} >
					<Content style={{width: 300}}>
					<H1 style={{textAlign: 'center', marginTop: 30, color: '#fff'}}>Cadastro</H1>
						<Form>
							<Item floatingLabel>
								<Label style={{color: '#fff'}}>Email</Label>
								<Input style={{color: '#fff'}} />
							</Item>
							<Item floatingLabel>
								<Label style={{color: '#fff'}}>Nome</Label>
								<Input style={{color: '#fff'}} />
							</Item>
							<Item floatingLabel>
								<Label style={{color: '#fff'}}>Telefone</Label>
								<Input style={{color: '#fff'}} />
							</Item>
							<Item floatingLabel>
								<Label style={{color: '#fff'}}>Cidade</Label>
								<Input style={{color: '#fff'}} />
							</Item>
							<Item floatingLabel>
								<Label style={{color: '#fff'}}>Estado</Label>
								<Input style={{color: '#fff'}} />
							</Item>
							<Item floatingLabel>
								<Label style={{color: '#fff'}}>Senha</Label>
								<Input style={{color: '#fff'}} />
							</Item>
							<Item floatingLabel>
								<Label style={{color: '#fff'}}>Confirmar Senha</Label>
								<Input style={{color: '#fff'}} />
							</Item>
						</Form>
						<Button light bordered block style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('Signup')}><Text>Cadastrar</Text></Button>
						<Text onPress={() => this.props.navigation.navigate('Login')} style={{fontSize: 20, color: '#fff', textAlign:'center', marginTop: 15, textDecorationLine: 'underline'}}>Já Cadastrado ?</Text>
					</Content>
				</LinearGradient>
			</Container>
		);
}
}