import React from 'react'
import Card from 'react-bootstrap/Card'
import millify from 'millify'
export default class CardElement extends React.Component {

    render() {
        var text1 = this.props.title == 'Revenue' ? '$' + millify((this.props.text)) : millify((this.props.text))
        return (
            <Card style={{ margin: '5px 0px 5px 0px' }}>
                <Card.Body>
                    <Card.Title>
                        {this.props.title}
                    </Card.Title>
                    <Card.Text>
                        {text1}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}