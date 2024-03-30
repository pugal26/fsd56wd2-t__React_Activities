import './App.css'
import { Header } from './components/Header'
import { Home } from './components/Home'


export const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Home />
      </div>
    </div>
  )
}