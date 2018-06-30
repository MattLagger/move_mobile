import React from 'react'
import { Container, Content } from 'native-base'
import Header from '../Layouts/Header'
import Card from './Card'

export default () => (
    <Container>
        <Header title='Home'/>
        <Content>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Content>
    </Container>
)