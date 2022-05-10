import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

const Cart = ({ cart, setCart, handleChange,handleRemove,handlePrice,price }) => {
 

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span> {price} som</span>
      </div>
   <Link to="/order"><button >Order</button> </Link> 
    </article>
    
  );
};

export default Cart;