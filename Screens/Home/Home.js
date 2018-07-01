import React from 'react'
import {Text} from 'react-native'
import { Container, Content } from 'native-base'
import Header from '../Layouts/Header'
import Card from './Card'
import {Profile} from '../../Config/Auth'

class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			user: {
				email: '',
				name: '',
			}
		};
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
						<Card />
						<Card />
					</Content>
				</Container>
		)	
	}
}

export default Home 
