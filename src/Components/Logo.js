import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
export default class Logo extends React.Component {
    render() {
        return (
            <Navbar style={{ backgroundColor: '#7164ff' }} variant="dark">
                <Navbar.Brand >
                    A D S O U L
                </Navbar.Brand>
            </Navbar>
        )
    }
}