import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore ,combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger'

//Reducers store data

const orderId = (state = 0, action)=>{
    console.log(`I'm a reducer!`)
    if(action.type === 'INCREASE_ORDER_ID'){
    //If not change return existing value
    //! Never set state equal to anything (e.g. DO NOT state++)
    return state + 1;
}
    return state 
}

/** TODO: Create store */

const storeInstance = createStore(
    combineReducers(
        {
            orderId,
            //OTHER REDUCERS ADDED HERE
        }
    ),
    //Set up logger
    applyMiddleware(logger)

)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={storeInstance}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Provider>
);
