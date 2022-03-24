import React from 'react'
import {Card,Button } from "react-bootstrap"
import "./adverd.css"
function Adverd() {
  return (
      <div className="adverd">
          <div className="adverd-card">
                 <Card className="bg-dark text-white" style={{ width: '50rem',height:'40rem' }}>
    <Card.Img className="adverd-img" src="./images/adverd/shoes.jpg" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title className="adverd-title"> Первые шаги</Card.Title>
      <Button  onClick={event =>  window.location.href='/babyshoes'} className=" btna btn1" variant="light">Подробнее</Button> 
    </Card.ImgOverlay>
  </Card>
          </div>
    <div className="adverd-card">
 <Card className="bg-dark text-white" style={{ width: '70rem',height:'40rem' }}>
    <Card.Img className="adverd-img2"  src="./images/adverd/newborn.jpg" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title className="adverd-title title2">NewBorn</Card.Title>
      <Button  onClick={event =>  window.location.href='/baby'}className="btna  btn2" variant="light">Подробнее</Button> 
   
    </Card.ImgOverlay>
  </Card>

    </div>

   
      </div>
   
  )
}

export default Adverd