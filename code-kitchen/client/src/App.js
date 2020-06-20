import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Recipes from './components/Recipes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //adding the browser, switch and router after npm install react-router-dom
import ReceipeDetails from './components/ReceipeDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Recipes} />
            <Route path="/recipes/:id" component={ReceipeDetails} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
