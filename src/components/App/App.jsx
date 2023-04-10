import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import OrderDetails from '../OrderDetails/OrderDetails';
import Home from '../Home/Home';

function App() {
  

  return (
    <div className='App'>
      
      <Router>
        {/* routers witch wich view is showing based on the url */}
        <ul>
          <li>
            {/* Link is basically a <a href="/"> Home</a> */}
            {/* use Text dont use a button tag */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orders">Order Details</Link>
          </li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        {/* if the url is /#/ display the Home component */}

        {/* Client side route params */}
        <Route exact path="/orders">
          <OrderDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;
