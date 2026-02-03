import { Route, Routes } from 'react-router'
import {Home} from './pages/home/Home'
import {Checkout} from './pages/checkout/Checkout'
import {Orders} from './pages/orders/Orders'
import {Tracking} from './pages/tracking/Tracking'
import {NotFound} from './pages/NotFound/404NotFound'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path='checkout' element={<Checkout />}/>
      <Route path='orders' element={<Orders />}/>
      <Route path='tracking' element={<Tracking />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App
