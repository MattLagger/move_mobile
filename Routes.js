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
import Icon from 'react-native-vector-icons/MaterialIcons'
import { 
	createBottomTabNavigator, 
	createStackNavigator,
	createSwitchNavigator,	
} from 'react-navigation';

// Importa os componentes do MainStack
import Home from './Screens/Home/Home';
import Events from './Screens/Events/Events';
import Friends from './Screens/Friends/Friends';
import Explorar from './Screens/Explorar/Explorar';
import EventForm from './Screens/Events/EventForm';

// Importa os componentes do AuthStack 
import Login from './Screens/Auth/Login/Login';
import Signup from './Screens/Auth/Signup/Signup';
import SuccessFullRegister from './Screens/Auth/Signup/SuccessFullRegister'

/**
 * Navegador responsável pela autorização.
 * Através dele são criadas duas rotas:
 *	1 - Login,
 *	2 - Signup 
 *
 */

const AuthStack = createStackNavigator(
	{ Login, Signup, SuccessFullRegister},
	{ headerMode: 'none', }
);

/*
 * Navegação principal do app, cria uma barra de navegação
 * na parte inferior da tela.
 *
 * Telas:
 *	1 - Início,
 *	2 -	Eventos,
 *	3 - Amigos	
 *
 */
const MainStack = createBottomTabNavigator(
	{
		Home:{
			screen: Home,
			navigationOptions:{
				tabBarIcon: ({tintColor}) => <Icon size={30} name='home' color={tintColor} />
			}
		},
		Explorar:{
			screen: Explorar,
			navigationOptions:{
				tabBarIcon: ({tintColor}) => <Icon size={30} name='search' color={tintColor} />
			}
		},
		Adicionar:{
			screen: EventForm,
			navigationOptions:{
				tabBarIcon: ({tintColor}) => <Icon size={30} name='add-box' color={tintColor} />
			}
		},
		Events:{
			screen: Events,
			navigationOptions:{
				tabBarIcon: ({tintColor}) => <Icon size={30} name='date-range' color={tintColor} />
			}
		},
		Friends:{
			screen: Friends,
			navigationOptions:{
				tabBarIcon: ({tintColor}) => <Icon size={30} name='group' color={tintColor} />
			}
		}
	},
	{
	tabBarOptions: {
		activeTintColor: '#fff',
		inactiveTintColor: '#c1c1c1',
		labelStyle:{
			fontSize: 15
		},
		style:{
			backgroundColor: '#4834d4',
			height: 55
		}
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


