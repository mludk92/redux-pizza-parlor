import './OrderDetails.css'

function OrderDetails() {
  return (
    <div> 
    <form class="form-style-9">
        <ul>
        <li>
            <input type="text" name="field1" class="field-style field-full align-none" placeholder="Name" />
            

        </li>
        <li>
            <input type="text" name="field3" class="field-style field-split align-left" placeholder="City" />
            <input type="number" name="field4" class="field-style field-split align-right" placeholder="Zip Code" />
        </li>
        <li>
        <input type="text" name="field5" class="field-style field-full align-none" placeholder="Street Address" />
        </li>
        <li>
        <select type="text" name="field6" >
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
