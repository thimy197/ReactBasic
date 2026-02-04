import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../Components/Header'
import { OrderGrid } from './OrderGrid'
import './Orders.css';

export function Orders({ carts }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/orders?expand=products");
        setOrders(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, []);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="images/favicons/orders-favicon.png" />
      <title>Orders</title>
      <Header carts={carts} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrderGrid orders={orders} />
      </div>
    </>
  );
}