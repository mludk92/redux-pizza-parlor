import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './OrderDetails.css';
import axios from 'axios';


function OrderDetails() {
  const [name, setName] = useState('Name');
  const [city, setCity] = useState('City');
  const [zipCode, setZipCode] = useState('Zip Code');
  const [streetAddress, setStreetAddress] = useState('Street Address');
  const [deliveryOption, setDeliveryOption] = useState('Delivery');
  const dispatch = useDispatch();
  const orders = useSelector(store => store.orderList);

  const getOrders = () => {
    dispatch({ type: 'FETCH_ORDERS' })
  }

  useEffect(() => {
    getOrders();
    console.log('component did mount');
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/order', {
      customer_name: name,
      street_address: streetAddress,
      city: city,
      zip: zipCode,
      total: 10,
      type: deliveryOption,
      pizzas: [{
        id: "1",
        quantity: "1"
      }, {
        id: "2",
        quantity: "1"
      }]
    })
      .then(response => {
        // clear inputs
        setName('');
        setCity('');
        setZipCode('');
        setStreetAddress('');
        setDeliveryOption('');

        // get updated orders list
        getOrders();
        alert('order added successfully');
      })
      .catch((error) => {
        console.log(`Error in Post Order ${error}`)
      });
  };


  return (
    <div>
      <form class="form-style-9" onSubmit={handleSubmit}>
        <ul>
          <li>
            <input type="text" name="field1" class="field-style field-full align-none" placeholder={name} onChange={(e) => setName(e.target.value)} />
          </li>
          <li>
            <input type="text" name="field3" class="field-style field-split align-left" placeholder={city} onChange={(e) => setCity(e.target.value)} />
            <input type="text" name="field4" class="field-style field-split align-right" placeholder={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          </li>
          <li>
            <input type="text" name="field5" class="field-style field-full align-none" placeholder={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
          </li>
          <li>
            <select type="text" name="field6" value={deliveryOption} onChange={(e) => setDeliveryOption(e.target.value)}>
              <option value="Pick Up">PickUp</option>
              <option value="Delivery">Delivery</option>
            </select>
          </li>
          <li>
            <input type="submit" value="Submit Order" />
          </li>
        </ul>
      </form>
      {/* <div>
        <h3>Order List</h3>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Order Type</th>
              <th>Order Total</th>
              <th>Order Placed At</th>
            </tr>
  </thead>
  <tbody>
    {orders.map(order => (
      <tr key={order.id}>
        <td>{order.customer_name}</td>
        <td>{order.street_address} ,{order.city}, {order.zip}</td>
        <td> {order.type} </td>
        <td> {order.total} </td>
        <td> {order.time} </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>  */}
    </div>    
  );
}

export default OrderDetails;
