import React from 'react'
import Row from 'react-bootstrap/Row'
import asset1 from './assets/asset1.svg'
import Logo from './Logo.js'
export default class Branding extends React.Component {
    render() {
        return (
            <div>
                <Row style={{ backgroundColor: '#7164ff' }}>
                    <Logo></Logo>
                </Row>
                <Row className="justify-content-center" style={{ backgroundColor: '#7164ff', padding: '50px' }}>
                    <img src={asset1}></img>
                </Row>
            </div>
        )
    }
}