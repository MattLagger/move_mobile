import React, { Component } from 'react';
import { Container, Header, Content, List, Left, Icon, Button, ListItem, Thumbnail, Text, Title, Right, Body } from 'native-base';
import {
	Platform,
	StyleSheet,
	Image
} from 'react-native';

class Consultas extends React.Component {
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent>
							<Icon name='arrow-back' />
						</Button>
					</Left>
					<Body>
						<Title>Catálogo</Title>
					</Body>
				</Header>
				<Content>
					<List>
						<ListItem>
							<Thumbnail square size={80} source={{ uri: 'https://i.imgur.com/GHK0Tmz.jpg' }} />
							<Body>
								<Text>Dr. Amahl Farouk </Text>
								<Text note>Its time to build a difference . .</Text>
							</Body>
						</ListItem>
					</List>
				</Content>
			</Container>
			);
}
}

export default Consultas;
