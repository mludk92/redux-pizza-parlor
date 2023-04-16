import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminOrders from '..//AdminOrders';
import './App.css';

function App() {

  return (
    <div className='App'>
      {/* Wrap the application with React Router */}
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      {/* Define routes for different components */}
      <Switch>
        {/* Add a route for the AdminOrders components */}
        <Route path="/admin" component={AdminOrders} />
        {/* Other routes can be added here */}
      </Switch>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      </Router>
  
    </div>
  );
}

export default App;
