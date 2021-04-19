import './App.css';
import Container from 'react-bootstrap/Container'
import React from 'react'
export default class Desc extends React.Component {
    render() {
        return (
            <Container style={{ padding: '20px' }}><img src={this.props.img}></img>
                <p style={{ marginTop: '10px', fontSize: '20px' }}>{this.props.text}</p>
            </Container>
        )
    }
}