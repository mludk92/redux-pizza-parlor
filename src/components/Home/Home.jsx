import React from 'react';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { useHistory } from 'react-router-dom';
import SelectPizza from '../SelectPizza/SelectPizza';

function Home() {
  const history = useHistory();
  const cart = useSelector(state => state.cart);

  const getCartTotal = ({cart}) => {
    return cart.reduce((acc,val) => {
      acc += val.price;
      return acc;
    })
  }

  const total = getCartTotal(cart);

  const nextPage = () => {
    return (
      history.push('/orders')
    ) 
  }
  return (
    <div>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
     <Badge badgeContent={total} ></Badge>
      </header>
      <img src='images/pizza_photo.png' />
     <SelectPizza />
     <Button onClick={nextPage}>Next Page</Button>
    </div>
  );
}

export default Home;