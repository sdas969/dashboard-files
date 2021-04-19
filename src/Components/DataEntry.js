import React from 'react'
export default class DataEntry extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.date}</td>
                <td>${this.props.revenue}</td>
                <td>{this.props.adRequest}</td>
                <td>{this.props.adResponse}</td>
                <td>{this.props.impressions}</td>
                <td>{this.props.clicks}</td>
                <td>{this.props.render}%</td>
            </tr>
        )
    }
}