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
  data.girlsJackets.map(jacket=>
   <li>            
     <div className="product">
           <Link to={'/jacket/'+jacket._id}>
               <img src={jacket.image} class="product-image" alt=""/>
            </Link>
            
            
          <div className="product-name">     
            <Link to={'/jacket/'+jacket._id}>{jacket.name}</Link>                 
             </div>
             <div className="product-brand">{jacket.brand}</div>
             <div className="product-price">{jacket.price}сом</div>
             <div className="product-rating">{jacket.rating}</div>           
             <div className="product-rating">{jacket.description}</div>           
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