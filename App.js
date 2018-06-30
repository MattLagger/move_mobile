/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
import Routes from './Routes'
import { YellowBox } from 'react-native';
import {IsSignedIn} from './Config/Auth';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import Catalogo from './Screens/Main/Catalogo/Catalogo';
import { Container, Header, Content, Spinner } from 'native-base';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			signedIn: false,
			checkedSignIn: false,
			isLoading: true
		}
	}

	componentWillMount(){
		IsSignedIn()
		.then(resp => {
			if (resp) {
				this.setState({...this.state, signedIn: true, checkedSignIn: true, isLoading: false})
			}
		})
		.then(() => this.setState({...this.state, checkedSignIn: true, isLoading: false}))
	}

	render() {
		/*
		 * Verfica se o usuário está logado, caso esteja logado será redirecionado
		 * para o MainStack, caso contrário será redirecionado para a AtuStack
		 * entre uma tela e outra haverá um Loading Spinnder
		 *
		 */
		const Layout = Routes(this.state.signedIn)
		if (this.state.isLoading) {
			return <Spinner color="blue" />
		} else {
				return <Layout />
		}

	}
}

export default App;
