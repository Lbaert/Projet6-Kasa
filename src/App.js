import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound'
import Logement from './pages/logement/Logement';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/logement" component={Logement} />
          <Route component={NotFound} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
