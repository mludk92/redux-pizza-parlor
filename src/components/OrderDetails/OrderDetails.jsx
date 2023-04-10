import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

function OrderDetails () {
    const history = useHistory()

    const handleClick = (e) => {
      //... submit form followed by history.push 
      history.push('/') //go home "/"
      //usually goes in the .then to confirm server worked correctly
  
    }
    return (
        <div>
        <div><h1>Order Details</h1></div>
        </div>
    )
}

export default OrderDetails