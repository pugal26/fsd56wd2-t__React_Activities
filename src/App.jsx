import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Home } from './components/Home'


export const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
    
      <div className="container">
        <Header cart={cart}/>
        <Home cart={cart} setCart={setCart}/>
      </div>
    </div>
  )
}