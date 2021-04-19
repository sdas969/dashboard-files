import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default class Publisher extends React.Component {
    render() {
        return (
            <Navbar bg='light' variant="dark" >
                <Navbar.Brand style={{ padding: '0px 0px 20px 0px' }}>
                    <Link to='/'><Button variant="light" style={{ margin: '10px' }}><ArrowBackIcon></ArrowBackIcon></Button></Link>
                </Navbar.Brand>
                <Navbar.Brand style={{ color: 'black' }} >
                    <h3>{this.props.name}</h3>
                </Navbar.Brand>
            </Navbar>
        )
    }
}