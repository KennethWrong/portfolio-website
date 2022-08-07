import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './routes/Home';
import Experience from './routes/Experience';
import About from './routes/About';
import {useState} from 'react'

function App() {
  const [isDark, setIsDark] = useState(false)

  const handleDarkToggle = () => {
    setIsDark(!isDark)
  }

  return (
    <Router>
    <div className={`${isDark?'dark':''}`}>
      <div className="App dark:bg-black">
        <Switch>
          <Route path='/experience'>
            <Nav handleDarkToggle={handleDarkToggle}/>
            <Experience />
          </Route>
          <Route path="/" exact>
            <Home handleDarkToggle={handleDarkToggle}/>
            <Footer />
          </Route>
          <Route path="/about">
            <Nav handleDarkToggle={handleDarkToggle}/>
            <About />
            <Footer />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
