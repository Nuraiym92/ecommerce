import React from 'react'
import "./category.css"
import {Card,Col,Row,CardGroup} from "react-bootstrap"
import {Link} from "react-router-dom"

  // const cardInfo=[
  //   {image:"./images/category/girl.jpg",title:"Одежда для девочек",link:"/girls"},
  //   {image:"./images/category/boy.jpg",title:"Одежда для мальчиков",link:"/boys"},
  //   {image:"./images/category/baby.jpg",title:"Одежда для малышей",link:"/baby"},
  //   {image:"./images/category/toy.jpg",title:"Игрушки",link:"/toys"}
  // ];


  
  function Category() {
    return (
      <>
<h2 className="heading">Покупки по  Категориям</h2>
      <CardGroup className="card-group">
      <Card className="card">
        <Card.Img variant="top" src="./images/category/girl.jpg" />
        <Card.Body className="category-title">
          <Card.Title  className="category-title" as={Link} to="/girls">Одежда для девочек</Card.Title>
          
        </Card.Body>
        </Card>
      <Card>
        <Card.Img variant="top" src="./images/category/boy.jpg" />
        <Card.Body  className="category-title">
          <Card.Title className="category-title"as={Link} to="/boys">Одежда для мальчиков</Card.Title>
        </Card.Body>
        </Card>
      <Card>
        <Card.Img variant="top" src="./images/category/baby.jpg" />
        <Card.Body  className="category-title">
          <Card.Title className="category-title" as={Link} to="/baby">Одежда для малышей</Card.Title>
        </Card.Body>
        </Card>
      <Card>
        <Card.Img variant="top" src="./images/category/toy.jpg" />
        <Card.Body  className="category-title">
          <Card.Title className="category-title" as={Link} to="/toys">Игрушки</Card.Title>
        </Card.Body>
        </Card>
      
    </CardGroup>
      </>
      
    )
  }
  
  export default Category
   
     
  