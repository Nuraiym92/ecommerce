import React from 'react'
import {Card,Col,Row,CardGroup} from "react-bootstrap"
import {Link} from "react-router-dom"
function GirlsCategory() {
    return (
        <>
  <h2 className="heading">Каталог</h2>
        <CardGroup className="card-group">
        <Card className="card">
          <Card.Img variant="top" src="./images/girls/category/dress.jpg" />
          <Card.Body className="category-title">
            <Card.Title  className="category-title" as={Link} to="/girls/girlsdress">Платья</Card.Title>
            
          </Card.Body>
          </Card>
        <Card>
          <Card.Img variant="top" src="./images/girls/category/jacket.jpg"  />
          <Card.Body  className="category-title">
            <Card.Title className="category-title"as={Link} to="/girls/girlsjacket">Верхняя одежда</Card.Title>
          </Card.Body>
          </Card>
        <Card>
          <Card.Img variant="top" src="./images/girls/category/sport.jpg"/>
          <Card.Body  className="category-title">
            <Card.Title className="category-title" as={Link} to="/girls/girlstshirt">Спортивая одежда</Card.Title>
          </Card.Body>
          </Card>
        <Card>
          <Card.Img variant="top" src="./images/girls/category/t-shirt.jpg" />
          <Card.Body  className="category-title">
            <Card.Title className="category-title" as={Link} to="/girls/girlstshirt">Футболки</Card.Title>
          </Card.Body>
          </Card>
        
      </CardGroup>
        </>
        
      )
}

export default GirlsCategory