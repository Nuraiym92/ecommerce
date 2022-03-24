import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({item,handleClick}) => {
    const {id,name,image,price}=item
  return (
    <ul class="products">
         <div className="product">
         <Link to={'/product/'+id} >
               <img src={image} class="product-image" alt=""/>
            </Link>
            
            
          <div className="product-name">     
            <Link to={'/product/'+id}>{name}</Link>                 
             </div>
            
             <div className="product-price">{price}сом</div>
             <button onClick={()=>handleClick(item)}>Add to cart</button>
                     
            

    </div>
    </ul>
   
  )
}

export default Card