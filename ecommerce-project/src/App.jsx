import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router';
import { Home } from './pages/home/Home';
import { Checkout } from './pages/checkout/Checkout';
import { Orders } from './pages/orders/Orders';
import { Tracking } from './pages/tracking/Tracking';
import { NotFound } from './pages/NotFound/404NotFound';
import './App.css';

function App() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    // Make GET request to fetch data
    axios.get("/api/cart-items?expand=product")
      .then((response) => {
        setCarts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Routes>
      <Route index element={<Home carts={carts} />} />
      <Route path='checkout' element={<Checkout carts={carts} />} />
      <Route path='orders' element={<Orders carts={carts} />} />
      <Route path='tracking/:orderId/:productId' element={<Tracking carts={carts} />} />
      <Route path='*' element={<NotFound carts={carts} />} />
    </Routes>
  )
}

export default App
