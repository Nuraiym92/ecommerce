import React from 'react'
import "./stock.css"
import {Link} from "react-router-dom"
function Stock() {

    return(
        <div className="stock">
         <div className="wrapper">
          <div className="stock-item2">
           <img src="/images/stock/1.jpg"/>      
            <h2 className="stock-title">Акции  игрушек</h2>
      <Link to="/toys" className='btna stock-btn2'>Купить</Link> 
      </div>
        <div className="stock-item1">
        <h2 className="stock-title1">Новинки для школьников</h2>
        <Link to="/students" className='btna stock-btn1 '>Купить</Link>
       <img className="stock-img" src="/images/stock/2.jpg"/>
  </div>
  </div>
  </div>
        
      
    )
      
  
}

export default Stock
