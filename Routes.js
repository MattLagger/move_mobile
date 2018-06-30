/**
 * Componente responsável por gerenciar as rotas do aplicativo
 * Autor: Giocondo Brasil
 *
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
	createBottomTabNavigator, 
	createStackNavigator,
	createSwitchNavigator,	
} from 'react-navigation';

// Importa os componentes do MainStack
import Home from './Screens/Home/Home';
import Events from './Screens/Events/Events';
import Friends from './Screens/Friends/Friends';

// Importa os componentes do AuthStack 
import Login from './Screens/Auth/Login/Login';
import Signup from './Screens/Auth/Signup/Signup';

/**
 * Navegador responsável pela autorização.
 * Através dele são criadas duas rotas:
 *	1 - Login,
 *	2 - Signup 
 *
 */

const AuthStack = createStackNavigator({
	Login: Login,
	Signup: Signup,
},
	{
		headerMode: 'none',
	}
);

/*
 * Navegação principal do app, cria uma barra de navegação
 * na parte inferior da tela.
 *
 * Telas:
 *	1 - Perfil,
 *	2 -	Catálogo,
 *	3 -	Consultas
 *
 */
const MainStack = createBottomTabNavigator(
	{
		Home,
		Events,
		Friends
	},
	{
	tabBarOptions: {
		activeTintColor: 'tomato',
		inactiveTintColor: 'gray',
	},
}
);

/*
 * Este é o SwitchNavigator, é responsável pela transição entre o
 * StackNavigator e o TabNavigator, bem como pelo reset do histórico de rotas.
 * É necessário para que possamos iniciar a aplicação com uma tela de Login e outra
 * de Cadastro sem ligação com a Barra de navegação inferior.
 *
 */

export default (signedIn = false) => {
	return createSwitchNavigator({
		Main: {
			screen: MainStack
		},
		Auth: {
			screen: AuthStack
		}
	}, {
		initialRouteName: signedIn ? "Main" : "Auth"
	})
}




const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

