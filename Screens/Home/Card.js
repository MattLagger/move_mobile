import React from 'react';
import { Image } from 'react-native';
import {Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'


export default () => (
    <Card>
        <CardItem>
            <Left>
            <Thumbnail source={{uri: 'https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800&h=700&zoom=2'}} />
            <Body>
                <Text>Wendreo Teixeira</Text>
            </Body>
            </Left>
            <Right>
                <Button transparent>
                    <Text style={{fontSize: 20, color:'#1f3a93'}}>12</Text>
                    <Icon name="star" size={25} color='#1f3a93' />
                </Button>
            </Right>
        </CardItem>
        <CardItem cardBody>
            <Image source={{uri: 'https://cdn.internationalinsurance.com/wp-content/uploads/2014/03/extreme-sport-travel-insurance.jpg'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
            <Body>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                    ultrices, tortor sed interdum volutpat, orci leo accumsan est, 
                    a cras amet.
                </Text>
            </Body>   
        </CardItem>
        <CardItem>
            <Left>
                <Icon name="place"size={20} color='#a1a1a1a1' />
                <Text style={{color: '#a1a1a1', fontSize: 15}}>Universidade Federal do Acre</Text>
            </Left>
            <Body />
            <Right style={{flex: 1, alignItems: 'center', flexDirection: 'row-reverse'}}>
                <Icon name="alarm"size={20} color='#a1a1a1' />  
                <Text style={{color: '#a1a1a1', fontSize: 15}}>11hs</Text>
            </Right>
        </CardItem>
    </Card>
)
