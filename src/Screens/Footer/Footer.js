import React from 'react'
import "./footer.css"
import {Card,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
function Footer() {
  return (
    <div className="footer">
        <div className="newsletter">
        <Card className="newsletter-card1">
  <Card.Body>Подпишитесь на наши рассылки</Card.Body>
</Card>
        <Card className="newsletter-card2">
            <div className="card2">
             <Card.Body><input className="email" type="email" placeholder="Ваш Email"/></Card.Body>
</div>
</Card>
        </div>
        <div className='footer-nav'>
    <ul className="navigation">
        <li ><Link  className='navigation-link' to="/cart" >Корзина</Link></li>
        <li ><Link  className='navigation-link' to="/category" >Категории</Link></li>
        <li ><Link  className='navigation-link logo' to="/" >LIANA</Link></li>
        <li ><Link  className='navigation-link' to="/payment" >Оплата</Link></li>
        <li ><Link  className='navigation-link' to="/delivery" >Доставка</Link></li>
        
    </ul>
    
        </div>
        <div className='social-links'>
              <ul className="social-items">
        <li><img src="./images/footer/twitter.svg"/></li>
        <li><img src="./images/footer/facebook.svg"/></li>
        <li><img src="./images/footer/instagram.svg"/></li>
        <li><img src="./images/footer/telegram.svg"/></li>
            
    </ul>
        </div>

     
  
    </div>
  )
}

export default Footer