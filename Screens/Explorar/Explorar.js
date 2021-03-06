import React from 'react'
import {Text, StyleSheet} from 'react-native'
import { Container, Content } from 'native-base'
import Header from '../Layouts/Header'
import {Profile} from '../../Config/Auth'
import MapView from 'react-native-maps';


class Explorar extends React.Component {
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
				<MapView
					style={styles.map}
					region={this.state.region}
					showUserlocation={true}
					showsMyLocationButton={true}
					showsTraffic={true}
					toolBarEnabled={true}
				/>
				<Text> {this.state.user.email}</Text>

			</Container>
			)	
}
}

export default Explorar 
const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
	}

});
