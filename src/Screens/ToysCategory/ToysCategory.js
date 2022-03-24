import React from 'react'
import {Card,Col,Row,CardGroup} from "react-bootstrap"
import {Link} from "react-router-dom"
function ToysCategory() {
   
    return (
        <>

  <h2 className="heading">Каталог</h2>
  <div className='back-to-result'>
  <Link to= "/">Back to result</Link>
</div>

     <CardGroup className="card-group">
        <Card className="card">
          <Card.Img variant="top" src="./images/toys/girls/doll-1.jpg" />
          <Card.Body className="category-title">
            <Card.Title  className="category-title" as={Link} to="/baby/babyjackets">Для девочек</Card.Title>
            
          </Card.Body>
          </Card>
        <Card>
          <Card.Img variant="top" src="./images/toys/boys/boy-1.jpg"  />
          <Card.Body  className="category-title">
            <Card.Title className="category-title"as={Link} to="/baby/babybody">Для мальчиков</Card.Title>
          </Card.Body>
          </Card>
        <Card>
          <Card.Img variant="top" src="./images/toys/baby/baby-1.jpg"/>
          <Card.Body  className="category-title">
            <Card.Title className="category-title" as={Link} to="/baby/babypants">Малышам</Card.Title>
          </Card.Body>
          </Card>
    
        
    
        
      </CardGroup>

       
        </>
        
      )
}

export default ToysCategory