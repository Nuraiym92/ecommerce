import React,{useState} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./girlsdress.css"
import {Link} from "react-router-dom"
import data from '../../data'
function GirlsDress() {
 
  return (
    <div>
<Header/>
<div className='back-to-result'>
     <Link to= "/girls">Back to result</Link>
   </div>
<ul class="products">
 {
  data.products.map(product=>
  
    
   <li>            <div className="product">
           <Link to={'/product/'+product._id} >
               <img src={product.image} class="product-image" alt=""/>
            </Link>
            
            
          <div className="product-name">     
            <Link to={'/product/'+product._id}>{product.name}</Link>                 
             </div>
             <div className="product-price">{product.price}сом</div>
               <div className="btna add-cart">Add to cart</div>   
                  
              </div>
         </li>
    )
 }
         
         </ul> 
         <Footer/>
    </div>
  )
}

export default GirlsDress