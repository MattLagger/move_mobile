import React from 'react';
import { Image } from 'react-native';
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default () => (
    <Card>
        <CardItem>
            <Left>
            <Thumbnail source={{uri: 'https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800&h=700&zoom=2'}} />
            <Body>
                <Text>Wendreo</Text>
                <Text note>Teixeira</Text>
            </Body>
            </Left>
        </CardItem>
        <CardItem cardBody>
            <Image source={{uri: 'https://cdn.internationalinsurance.com/wp-content/uploads/2014/03/extreme-sport-travel-insurance.jpg'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
            <Left>
            <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
            </Button>
            </Left>
            <Body>
            <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
            </Button>
            </Body>
            <Right>
            <Text>11h ago</Text>
            </Right>
        </CardItem>
    </Card>
)