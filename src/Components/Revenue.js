import React from 'react'
import './App.css';
import Desc from './desc.js'
import icon1 from './assets/icon1.svg'
import icon2 from './assets/icon2.svg'
import icon3 from './assets/icon3.svg'
import icon4 from './assets/icon4.svg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
export default class RevenueOptimize extends React.Component {
    render() {
        return (
            <Row className="justify-content-center" style={{ backgroundColor: '#6155db', padding: '50px' }}>
                <h2 >Revenue Optimisation</h2>
                <Container fluid>
                    <Row>
                        <Col xs={6}>
                            <Desc text='Fill Rate' img={icon1}></Desc>
                        </Col>
                        <Col xs={6}>
                            <Desc text='Improve CTR' img={icon2}></Desc>
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Desc text='Refresh Rate' img={icon3}></Desc>
                        </Col>
                        <Col xs={6}>
                            <Desc text='Quick Integration' img={icon4}></Desc>
                        </Col>
                    </Row>
                </Container>
            </Row>
        )
    }
}