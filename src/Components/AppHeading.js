import React from 'react'
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from 'react-bootstrap/Button'
export default class AppHeading extends React.Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: this.props.bg, height: '20px', width: '20px', display: 'inline-block', marginRight: '5px' }}>
                </div>{this.props.publisherName}
                <Link to={this.props.to}><Button variant="light" ><ArrowForwardIcon ></ArrowForwardIcon></Button></Link>
            </div>

        )
    }
}