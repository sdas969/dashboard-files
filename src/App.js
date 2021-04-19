import HomePage from './Components/Homepage.js'
import AppPage from './Components/AppPage.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:name/:id" component={AppPage} />
    </Router>
  );
}

export default App;
