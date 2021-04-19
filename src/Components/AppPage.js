import './App.css';
import React from 'react'
import Table from 'react-bootstrap/Table'
import Logo from './Logo.js'
import Publisher from './Publisher';
import DataEntry from './DataEntry';

export default class AppPage extends React.Component {
    state = {
        loading: true,
        app: null,
    }
    async componentDidMount() {
        const response = await fetch('https://api.npoint.io/d734975d2aee62d197ef/' + this.props.match.params.id)
        const data = await response.json();
        var temp = []
        data.forEach(item => {
            temp.push(
                <DataEntry date={item.date} revenue={item.revenue} adRequest={item.adRequest} adResponse={item.adResponse} impressions={item.impressions} clicks={item.clicks} render={Math.trunc((item.impressions / item.adResponse) * 100)}></DataEntry>
            )
        })
        this.setState({ loading: false, app: temp })
    }
    render() {
        return (
            <div className="App">
                <Logo></Logo>
                <Publisher name={this.props.match.params.name}></Publisher>
                <div>

                    {this.state.loading || !this.state.app ? <div><h3>Loading...</h3></div> :
                        <div>
                            <Table borderless responsive='sm'>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Revenue</th>
                                        <th>AdRequests</th>
                                        <th>AdResponses</th>
                                        <th>Impressions</th>
                                        <th>Clicks</th>
                                        <th>Render</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.app}
                                </tbody>

                            </Table>

                        </div>}
                </div>
            </div>

        )
    }
}