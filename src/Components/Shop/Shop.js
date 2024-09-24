import React, { useEffect, useState } from 'react';
import '../Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = (prop) => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log( product, 'product added')
        const newCart = [...cart, product];
        setCart(newCart);
    }
   
useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then( data => {setProducts(data);
        // console.log(data)
    })

}, [])

    return (
        <div className='shop-container'>
            <div className="product-container">
                    {
                        products.map ( pd => <Product product={pd} handleAddProduct={handleAddProduct}></Product>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart= {cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;