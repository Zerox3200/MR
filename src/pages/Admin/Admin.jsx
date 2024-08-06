import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { BaseUrl } from '../../BaseUrl/url';

const socket = io(`${BaseUrl}`); // Adjust the URL to your server

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Listen for order updates
    socket.on('allOrders', (data) => {
      if (data.success) {
        setOrders(data.result);
        console.log(data.result);
      }
    });

    // Cleanup on unmount
    return () => {
      socket.off('allOrders');
    };
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order, index) => (
        <ul key={order._id}>
          <li >
            <span>Name: </span>
            <span>{order.name}</span>
          </li>
        </ul>
      ))}
    </div >
  );
}
