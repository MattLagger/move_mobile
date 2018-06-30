import React, {Component} from 'react';
import { Container, Accordion, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, H3, Badge, View } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Collapsible from 'react-native-collapsible'
import Header from '../Layouts/Header'

export default class extends Component{
    state={
        isVisible: false,
        friendsRequests:[
            {
								id: '1',
                image: 'https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800&h=700&zoom=2',
                name: 'Wendreo Matheus',
                city: 'Rio Branco'
            },
            {
								id: '1',
                image: 'https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800&h=700&zoom=2',
                name: 'Wendreo Matheus',
                city: 'Rio Branco'
            }
        ],
        friends:[
            {
								id: '1',
                image: 'https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800&h=700&zoom=2',
                name: 'Wendreo Matheus',
                city: 'Rio Branco'
            },
            {
								id: '1',
                image: 'https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800&h=700&zoom=2',
                name: 'Wendreo Matheus',
                city: 'Rio Branco'
            }
        ]
    }

    setVisible = () => {
        this.setState({isVisible: !this.state.isVisible})
    }

    renderRow = () => {
        return this.state.friends.map((item) => (
            <ListItem avatar style={{marginTop: 10}} key={item.id}>
                <Left>
                    <Thumbnail source={{uri: item.image}} />
                </Left>
                <Body>
                    <Text>{item.name}</Text>
                    <Text note> {item.city} </Text>
                </Body>
                <Right>
                    <Icon name='keyboard-arrow-right' color='#4834d4' size={40} />
                </Right>
            </ListItem>
        ))
    }

    renderRequests = () => {
        return this.state.friendsRequests.map((item) => (
            <ListItem avatar style={{marginTop: 10}} key={item.id}>
                <Left>
                    <Thumbnail source={{uri: item.image}} />
                </Left>
                <Body>
                    <Text>{item.name}</Text>
                    <Text note> {item.city} </Text>
                </Body>
                <Right>
                    <Button transparent light>
                        <Icon name='control-point' color='#4834d4' size={30} />
                    </Button>
                </Right>
            </ListItem>
        ))
    }

    render(){
        const {friends, friendsRequests, isVisible} = this.state
        return (
            <Container>
            <Header title="Amigos"/>
            <Content>
                <Button full primary onPress={() => this.setVisible()}>
                    <Text>2 Pedidos de Amizade Pendente</Text>                    
                    <Icon color='white' size={30} name={`keyboard-arrow-${isVisible ? 'up' : 'down'}`}/>
                </Button>
                <Collapsible collapsed={!isVisible}>
                    <List style={{marginVertical:10}}>
                        {this.renderRequests()}
                    </List>
                </Collapsible>
                <List style={{marginTop: 10}}>
                    {this.renderRow()}
                </List>
            </Content>
            </Container>
        )
        
    }
}
