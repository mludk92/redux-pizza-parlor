import { useState } from 'react';
import './OrderDetails.css';
import axios from 'axios';
function OrderDetails() {
  const [name, setName] = useState('Name');
  const [city, setCity] = useState('City');
  const [zipCode, setZipCode] = useState('Zip Code');
  const [streetAddress, setStreetAddress] = useState('Street Address');
  const [deliveryOption, setDeliveryOption] = useState('Delivery');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here

  axios.post('/api/order', 
  {customer_name: name,
    street_address: streetAddress,
    city: city,
    zip: zipCode,
    type: deliveryOption,
    total: 10,
    pizzas: 3}).then(response => {
        //clear inputs
        setName('name');
        setCity('City');
        setZipCode('Zip Code');
        setStreetAddress('Street Address');
        setDeliveryOption('Delivery')
    }).catch((error => {
        console.log(`Error in Post Order ${error}`)
    }))
  }

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
    </div>    
  );
}

export default OrderDetails;
