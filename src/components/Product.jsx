import React from 'react'
import './Product.css'

export const Product = ({ product, cart, setCart }) => {

    const addCart = () => {
        setCart([...cart, product])
    };
    const removeCart = () => {
        setCart(cart.filter((c) => c.id !== product.id));
    };

  return (
    <div>
        <section className='py-5'>
        <div className="conatiner mt-5">
            <div className="row">
                <div className="col-xl-3 mb-5">
                    <div className="card h-100">
                        {/* <!-- Product image--> */}
                        <img className="card-img-top" src={product.image} alt="..." />
                        {/* <!-- Product details--> */}
                        <div className="card-body p-4">
                            <div className="text-center">
                                {/* <!-- Product name--> */}
                                <h6 className="fw-bolder">{product.title}</h6>
                                {/* <!-- Product price--> */}
                                <br></br>$ {product.price}
                                <h6>Rating: {product.rating.rate} ({product.rating.count})</h6>
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                {cart.includes(product) ? (<a className="btn btn-outline-dark mt-auto" onClick={removeCart} href="#">Remove from Cart</a>) : (<a className="btn btn-outline-dark mt-auto" onClick={addCart} href="#">Add to Cart</a>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
