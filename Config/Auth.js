import {AsyncStorage} from "react-native";
import axiosClient from './axiosClient';

const SetToken = async(token) => {
	try {
		await AsyncStorage.setItem('jwt', token)
	} catch (error) {
		Logout()
	}
}

export const GetToken = async() => {
	try {
		let value = await AsyncStorage.getItem('jwt')
		return value
	} catch (error) {
		console.log(error)
	}
}

export const Signup = (user) => {
	return axiosClient.post(`/signup`, {user: user})
	.then(resp => {
		alert('Cadastro concluido, confirme seu email')
	})
	.catch(error => {
		if (error.response === undefined) {
			alert("Erro de conexão com servidor.")
		} else {
			alert("Verifique os dados inseridos.")
		}
		throw new Error(error)
	})
}

export const IsSignedIn = () => {
	return GetToken()
	.then(resp => {
		return resp
	})
	.catch(err => console.log(err))
}

export const Logout = async () => await AsyncStorage.removeItem('jwt')

export const LoginAction = async(credentials) => {

	return await axiosClient.post(`/user_token`, {auth: credentials})
	.then(resp => SetToken(resp.data.jwt))
	.catch(error => {
		if (error.response === undefined) {
			alert("Erro de conexão com servidor.")
		} else {
			alert("Verifique seu usuário e senha.")
		}
		throw new Error(error)
	})
}

export const Profile = async() => {
	try {
		let token = await GetToken()
		let user = await axiosClient.get(`/profile`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		return user
	} catch (error) {
		throw new Error(error)
		console.warn(error)
		Logout()
	}
}
