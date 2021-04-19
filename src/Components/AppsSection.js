import React from 'react'
import Container from 'react-bootstrap/Container'
import { ScrollView } from '@cantonjs/react-scroll-view'
import FetchData from './fetchData.js'
export default class AppSection extends React.Component {
    render() {
        return (
            <Container fluid >
                <Container style={{ margin: '50px 0px 0px 0px', color: 'black', textAlign: 'left' }}>
                    <h1>Apps</h1>
                    <ScrollView style={{ height: '90vh', padding: '10px 0px 0px 0px' }}>
                        <FetchData></FetchData>
                    </ScrollView>
                </Container>
            </Container>
        )
    }
}