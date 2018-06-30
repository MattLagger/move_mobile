import React, { Component } from 'react';
import {Button, Text, Item, Form, Label, Input, Container, Content, H1} from 'native-base'

export default class Signup extends Component {
	render() {
		return (
			<Container style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
				<Content style={{width: 300}}>
				<H1 style={{textAlign: 'center', marginTop: 30}}>Cadastro</H1>
					<Form>
						<Item floatingLabel>
							<Label>Email</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>Nome</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>Telefone</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>Cidade</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>Estado</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>Password</Label>
							<Input />
						</Item>
						<Item floatingLabel last>
							<Label>ConfirmPassword</Label>
							<Input />
						</Item>
					</Form>
					<Button block style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('Signup')}><Text>Cadastro</Text></Button>
					<Text onPress={() => this.props.navigation.navigate('Login')} style={{fontSize: 20, color: '#1F4788', textAlign:'center', marginTop: 15, textDecorationLine: 'underline'}}>Já Cadastrado ?</Text>
				</Content>
			</Container>
		);
}
}