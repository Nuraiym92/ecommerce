import React from 'react'
import "./basket.css"
export default function Basket(props) {
    const {cartItems}=props;
  return (
      <>
       <div className="basket">
        <h2>Basket</h2>
   
    <div>
        {cartItems.length===0 &&<div>Корзина пустая</div>}
        </div>
        </div>
      </>
   
  )
}
