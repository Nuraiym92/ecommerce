import React from 'react'
import "./girlsjacket.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import {Link} from "react-router-dom"
import data from '../../data'
function GirlsJacket() {
 
  return (
    <div>
<Header/>
<div className='back-to-result'>
     <Link to= "/girls">Back to result</Link>
   </div>
<ul class="products">
 {
  data.girlsJackets.map(product=>
   <li>            
     <div className="product">
           <Link to={'/product/'+product._id}>
               <img src={product.image} class="product-image" alt="product-image"/>
            </Link>
            
            
          <div className="product-name">     
            <Link to={'/product/'+product._id}>{product.name}</Link>                 
             </div>
          <div className="product-price">{product.price}сом</div>
                <button className="btna add-cart" onClick="addToCard">Add to Cart</button>    
              </div>
         </li>
    )
 }
         
         </ul> 
         <Footer/>
    </div>
    
  )
}

export default GirlsJacket