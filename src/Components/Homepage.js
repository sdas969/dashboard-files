import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AppsSection from './AppsSection.js'
import AdSoul from './AdSoul.js';

function Homepage() {
    return (
        <div className="App">
            <header className="App-header">
                <Container fluid >
                    <Row>
                        <Col xs={12} md={6}>
                            <AdSoul></AdSoul>
                        </Col>

                        <Col xs={12} md={6}>
                            <AppsSection style={{ backgroundColor: 'white', height: '100vh' }}></AppsSection>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default Homepage;
