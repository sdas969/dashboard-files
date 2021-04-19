import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'randomcolor'
import CardElement from './CardElement';
import AppHeading from './AppHeading';
var randomColor = require('randomcolor');
export default class FetchData extends React.Component {
    state = {
        loading: true,
        app: null,
    }
    async componentDidMount() {
        const response = await fetch('https://api.npoint.io/1b802698dfff6b1c6ccb')
        const data = await response.json();
        const response1 = await fetch('https://api.npoint.io/d734975d2aee62d197ef')
        const data1 = await response1.json();
        var temp = []
        data.forEach(data => {
            var key = data.id
            var lent = data1[key].length - 1
            var redirect1 = '/' + data.publisherName + '/' + key
            temp.push(
                <Card style={{ margin: '10px 0px 10px 0px' }}>
                    <Card.Header as='h3'>
                        <AppHeading to={redirect1} publisherName={data.publisherName} bg={randomColor()}></AppHeading>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <CardElement title='Revenue' text={data1[key][lent].revenue}></CardElement>
                            </Col>
                            <Col>
                                <CardElement title='AdRequest' text={data1[key][lent].adRequest}></CardElement>
                            </Col>
                            <Col>
                                <CardElement title='AdResponse' text={data1[key][lent].adResponse}></CardElement>
                            </Col>
                            <Col>
                                <CardElement title='Impressions' text={data1[key][lent].impressions}></CardElement>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card >
            )
        })
        this.setState({ loading: false, app: temp })

    }
    render() {
        return (
            <div>
                { this.state.loading || !this.state.app ? <div>Loading</div> : this.state.app}
            </div>
        );
    }
}