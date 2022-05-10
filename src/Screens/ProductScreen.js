import React, { useState } from 'react'
import data from '../data'
import { Link } from 'react-router-dom';
import GirlsDress from './GirlsDress/GirlsDress';
import Basket from "./Basket/Basket"

function ProductScreen(props) {


    const  product=data.products.find(x=>x._id===props.match.params.id);

return <div >
<div className='back-to-result'>
  <Link to= "/girls/girlsdress">Back to result</Link>
</div>
<div className='details'>
  <div className='details-image'>
     <img  src={product.image} alt="product"/>
  </div>
 <div className='details-info'>
   <ul>
     <li>
       <h4>{product.name}</h4>
     </li>
    
     <li>
      Цена: <b>{product.price}сом</b>
     </li>
     <li> 
       <div>
        Описание: {product.description}
       </div>
       </li>
   </ul>
 </div>
 <div className='details-action'>
   <ul>
     <li>
       Price: {product.price}
     </li>
     <li>
       Price: {product.status}
     </li>
     <li>
       Qty: <select>
         <option>1</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
         </select>
     </li>
     <li>
      <button  className='button'>Add to cart</button>  
     </li>
    
   </ul>

 </div>
</div>

</div>




 
 

}

export default ProductScreen