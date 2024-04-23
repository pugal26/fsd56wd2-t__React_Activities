import { useState } from "react"
import data from "../assets/products.json"
import { Product } from "./Product";

// console.log(data);
export const Home = ({ cart, setCart }) => {
  const [products] = useState(data);

  return (
   
            <div className="row"> 
              <div className="product-container">

      {products.map((product) => (
        <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
      ))}
    </div>
    </div>
  );
};
