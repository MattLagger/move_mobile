import React from 'react'
import {Text, StyleSheet} from 'react-native'
import { Container, Content } from 'native-base'
import Header from '../Layouts/Header'
import Card from './Card'
import {Profile} from '../../Config/Auth'
import MapView from 'react-native-maps';


class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			user: {
				email: '',
				name: '',
			},
			region: {
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			},
		};
	}

	componentWillMount(){
	
	}

	componentWillUnmount() {
	}

	componentDidMount() {
		Profile().then(resp => this.setState({user: resp.data}))	
	}

	

	render(){
		return(
			<Container>
				<Header title='Home'/>
				<Text> {this.state.user.email}</Text>
				<Content>
				<Card />
				<Card />
				<Card />
			</Content>
			</Container>
			)	
}
}

export default Home 
const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
	}

});
