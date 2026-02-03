import { Route, Routes } from 'react-router'
import {Home} from './pages/home/Home'
import {Checkout} from './pages/checkout/Checkout'
import {Orders} from './pages/orders/Orders'
import {Tracking} from './pages/tracking/Tracking'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path='checkout' element={<Checkout />}/>
      <Route path='orders' element={<Orders />}/>
      <Route path='tracking' element={<Tracking />}/>
    </Routes>
  )
}

export default App
