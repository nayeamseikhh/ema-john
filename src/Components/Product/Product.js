import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {title, image, category, description,price, rating} = props.product;
    // console.log(props.product.title)
    return (
        <div className='product'>
            <div>
                <img className='image' src={image} alt="" />
            </div>
            <div className='product-text-area'>
                <h2 className='product-name'>{title}</h2>
                <p>Description : {description}</p>
                <br />
                <p><small>By: {category} </small></p>
                <p>${price}</p>
                <p><small>Only {rating.count} left in stock - Order soon!</small></p>
                <button className='main-button' onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
         
           
        </div>
    );
};

export default Product;