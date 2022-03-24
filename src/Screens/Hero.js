import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from "react-router-dom"


function Hero(){



  return(
    <div className="hero">
      
        <Carousel  >
  <Carousel.Item >
    <h1>Сезонная распродажа для самых маленьких</h1>
 
    <button onClick={event =>  window.location.href='/baby'} className="btna hero-btn">Подробнее</button>
    <img
      className="d-block w-100"
      src="/images/carousel/c1.jpg"
      alt="First slide"
    />
   
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <h1>Чем больше бега, тем короче эта дистанция.</h1>

     <button onClick={event =>  window.location.href='/shoes'} className="btna hero-btn">Подробнее</button>
    <img
      className="d-block w-100 "
      src="/images/carousel/c2.jpg"
      alt="Second slide"
    />
       
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <h1>Эко мягкие игрушки-сделано с любовью!</h1>
    <button onClick={event =>  window.location.href='/toys'} className="btna hero-btn">Подробнее</button>
    <img
      className="d-block w-100"
      src="/images/carousel/c3.jpg"
      alt="Third slide"
    />
      
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
 
);

};
 




export default Hero

//     <ul class="products">
// {
//   data.products.map(product=>
//    <li>
//              <div className="product">
//              <Link to={'/product/'+product._id}>
//                  <img src={product.image} class="product-image" alt=""/>
//              </Link>
            
            
//              <div className="product-name">
//                  <Link to={'/product/'+product._id}>{product.name}</Link>
//                  </div>
//              <div className="product-brand">{product.brand}</div>
//              <div className="product-price">{product.price}</div>
//              <div className="product-rating">{product.rating}</div>
//              </div>
//          </li>
//    )
// }
         
//          </ul>