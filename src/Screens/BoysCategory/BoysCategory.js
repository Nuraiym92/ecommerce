import React from 'react'
import {Card,Col,Row,CardGroup} from "react-bootstrap"
import {Link} from "react-router-dom"
function BoysCategory() {
    return (
        <>
  <h2 className="heading">Каталог</h2>
  <div className='back-to-result'>
  <Link to= "/">Back to result</Link>
</div>
        <CardGroup className="card-group">
        <Card className="card">
          <Card.Img variant="top" src="./images/boys/jackets/j-1.jpg" />
          <Card.Body className="category-title">
            <Card.Title  className="category-title" as={Link} to="/boys/girlsdress">Верхняя одежда</Card.Title>
            
          </Card.Body>
          </Card>
        <Card>
          <Card.Img variant="top" src="./images/boys/t-shirt/t-1.jpg"  />
          <Card.Body  className="category-title">
            <Card.Title className="category-title"as={Link} to="/boys/boystshirt">Футболки</Card.Title>
          </Card.Body>
          </Card>
        <Card>
          <Card.Img variant="top" src="./images/boys/sport/s-1.jpg"/>
          <Card.Body  className="category-title">
            <Card.Title className="category-title" as={Link} to="/boys/boyssport">Спортивая одежда</Card.Title>
          </Card.Body>
          </Card>
        <Card>
          <Card.Img variant="top" src="./images/boys/pants/p-1.jpg" />
          <Card.Body  className="category-title">
            <Card.Title className="category-title" as={Link} to="/boys/boyspants">Брюки</Card.Title>
          </Card.Body>
          </Card>
        
      </CardGroup>
        </>
        
      )
}

export default BoysCategory