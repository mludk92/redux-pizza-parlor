import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore ,combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import axios from 'axios'
import {takeEvery, put} from 'redux-saga/effects'


//!---------------------------------------------------
//Reducers store data
const pizzas = (state = [], action) => {
    if(action.type === 'SET_PIZZA_LIST'){
      return action.payload;
    }
    return state;
}

const cart = (state = [], action) => {
  if(action.type === 'ADD_TO_CART'){
    return[...state, action.payload];
  } else if (action.type === 'CLEAR_CART'){
    return [];
  }
  return state;
}

const orderId = (state = 0, action)=>{
    console.log(`I'm a reducer!`)
    if(action.type === 'INCREASE_ORDER_ID'){
    //If not change return existing value
    //! Never set state equal to anything (e.g. DO NOT state++)
    return state + 1;
}
    return state 
}
//ORDER LIST
const orderList = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ORDER':
        return action.payload
      default:
        return state;
    }
  };
 
//!---------------------------------------------------
// create generators 
function* getOrderList() {
    try {
      const orders = yield axios.get('api/order')
      yield put({type: 'ADD_ORDER', payload: orders.data })
    } catch (error){
      console.log (`error in GET ${error}`)
    }
  }

  //!---------------------------------------------------
  // create saga store
  function* rootSaga() {
    yield takeEvery('FETCH_ORDERS', getOrderList)
  }

  //!---------------------------------------------------
  //set up saga middleware
  const sagaMiddleware = createSagaMiddleware();
/** TODO: Create store */

//!---------------------------------------------------
const storeInstance = createStore(
    combineReducers(
        {
            orderId,
            orderList,
            pizzas,
            cart,
            //OTHER REDUCERS ADDED HERE
        }
    ),
    //Set up logger
    applyMiddleware(sagaMiddleware,logger)

)

  //start saga middleware
  sagaMiddleware.run(rootSaga);

//!---------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
    
);
