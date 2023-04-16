import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './AdminOrders.css';

const AdminOrders = () => {
    // State for storing fetched orders
    const [orders, setOrders] = useState([]);

    //Fetch orders when the component is mounted
    useEffect(() => {
        fetchOrders();
    }, []);

    //Function to fetch orders from the /api/order endpoint
    const fetchOrders = async () => {
        try {
            const response = await axios.get('/api/order');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
        };

        //Render the table with fetched orders
        return (
            <div className="AdminOrders">
                <h2>Admin - Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time Order Placed</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.customer_name}</td>
                                <td>{new Date(order.time).toLocaleString()}</td>
                                <td>${order.total.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
    
export default AdminOrders;