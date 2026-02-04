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

  // Exposing Axios to the Console
  // window.axios = axios;

  const [carts, setCarts] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCarts(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<Home carts={carts} loadCart={loadCart} />} />
      <Route path='checkout' element={<Checkout carts={carts} loadCart={loadCart} />} />
      <Route path='orders' element={<Orders carts={carts} loadCart={loadCart} />} />
      <Route path='tracking/:orderId/:productId' element={<Tracking carts={carts} />} />
      <Route path='*' element={<NotFound carts={carts} />} />
    </Routes>
  )
}

export default App
