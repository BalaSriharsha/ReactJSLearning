import React from 'react';
import './App.css';
import Header from './components/Header'
import Product from './components/Product/Product';
import Passion from './views/Passion';
import Projects from './views/Projects';
import Contact from './views/Contact';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <div style={{marginTop:'75px'}}>
              <h1>This is Content</h1>
            </div>
            <Product />
          </Route>
          <Route exact path="/passion">
            <Passion/>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
