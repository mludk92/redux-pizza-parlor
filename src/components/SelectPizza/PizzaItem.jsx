import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';


function PizzaItem({ item }) {
    const dispatch = useDispatch();

    const addItemToCart = () => {
        console.log(`Adding ${item.name} to cart`);
        dispatch({ type: 'ADD_TO_CART', payload: item });
    }
    const removeItem = () => {
        console.log(`Removing ${item.name} from cart`);
        dispatch({ type: 'REMOVE_ITEM', payload: item });
    }

    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 275 }} >
                <CardContent>
                    <Typography
                        variant="h5"
                    >
                        {item}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={addItemToCart}>Add to Cart
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={removeItem}>Remove from Cart</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default PizzaItem;