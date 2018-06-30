import React from 'react'
import { Header, Body, Title, Left, Right } from 'native-base'

export default (props) => (
    <Header>
        <Left />
        <Body>
            <Title>{props.title}</Title>
        </Body>
        <Right />
    </Header>
)