import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './routes/Home';
import Experience from './routes/Experience';
import About from './routes/About';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/experience'>
          <Nav />
          <Experience />
        </Route>
        <Route path="/" exact>
          <Home />
          <Footer />
        </Route>
        <Route path="/about">
          <Nav />
          <About />
          <Footer />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
