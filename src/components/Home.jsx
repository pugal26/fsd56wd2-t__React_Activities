//Home.jsx
import { useState } from "react"
import data from "../assets/products.json"
import { Product } from "./Product";
import '../components/Home.css'

// console.log(data);
export const Home = ({ cart, setCart }) => {
  const [products] = useState(data);

  return (
      <div className="product-container">
        {products.map((product) => (  
            <Product product={product} key={product.id} cart={cart} setCart={setCart}/>
        ))}
      </div>
  );
};
