import { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux';

function SelectPizza () {
    
    const dispatch = useDispatch();
    const pizzas = useSelector(store => store.products);
    
    const fetchPizzaList = () => {
        axios.get('/api/pizza').then(response => {
            dispatch({type: 'SET_PIZZA_LIST', payload:response.data})
        }).catch((error) => {
            alert('Something went wrong.')
            console.log(error);
        })
    }
    useEffect(() => {
        fetchPizzaList();
    },[]);
    return (
<Container>
<h1>Step 1: Select Your Pizza</h1>
<br />
<Grid container spacing={2}>
    {
        pizzas.map((item, i) => (
            <PizzaItem
            key={i}
            item={item}
            />
        ))
    }
</Grid>
</Container>

 
    )
}

export default SelectPizza;