import React from 'react'
import {Card,Col,Row,CardGroup} from "react-bootstrap"
import {Link} from "react-router-dom"
function BabyCategory() {
   
    return (
        <>

  <h2 className="heading">Каталог</h2>
  <div className='back-to-result'>
  <Link to= "/">Back to result</Link>
</div>

     <CardGroup className="card-group">
        <Card className="card">
          <Card.Img variant="top" src="./images/baby/jackets/j-1.jpg" />
          <Card.Body className="category-title">
            <Card.Title  className="category-title" as={Link} to="/baby/babyjackets">Верхняя одежда</Card.Title>
            
          </Card.Body>
          </Card>
        <Card>
          <Card.Img variant="top" src="./images/baby/body/b-1.jpg"  />
          <Card.Body  className="category-title">
            <Card.Title className="category-title"as={Link} to="/baby/babybody">Боди</Card.Title>
          </Card.Body>
          </Card>
        <Card>
          <Card.Img variant="top" src="./images/baby/pants/p-1.jpg"/>
          <Card.Body  className="category-title">
            <Card.Title className="category-title" as={Link} to="/baby/babypants">Штаны</Card.Title>
          </Card.Body>
          </Card>
        <Card>
          <Card.Img variant="top" src="./images/baby/shoes/sh-1.jpg" />
          <Card.Body  className="category-title">
            <Card.Title className="category-title" as={Link} to="/baby/babyshoes">Обувь</Card.Title>
          </Card.Body>
          </Card>
        
      </CardGroup>

       
        </>
        
      )
}

export default BabyCategory