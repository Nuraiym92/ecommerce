import React from 'react'
import{NavDropdown,Form,Nav,Navbar,Container,FormControl,Button} from "react-bootstrap"
import {Link} from "react-router-dom";
import "./header.css"
import Login from "../../Login.js"

function Header({setShow}) {
  
  return (
  
    <div >
   <Navbar className="header-nav"   expand="lg">
<Container >
<Navbar.Brand as={Link} to={"/"}id="logo" href="#">Liana</Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
  <Nav
    className="me-auto my-2 my-lg-0"
    style={{ maxHeight: '100px' }}
    navbarScroll
  >
  <Nav.Link as={Link} className="nav-link"  to="/" >Главная</Nav.Link>
    
     <NavDropdown title="Каталог" id="navbarScrollingDropdown">
      <NavDropdown.Item as={Link} to="/girls" className="navbar-item">Одежда для девочек</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/boys"className="navbar-item">Одежда для мальчиков</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/baby" className="navbar-item" >Одежда для малышей</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/toys" className="navbar-item" >Эко-Игрушки</NavDropdown.Item>
      
    
    </NavDropdown>
    <Nav.Link  ><img className="phone-icon" src="/images/phoneicon.svg"/><a class="phone" href="tel:+996-709694704">+996709694704</a></Nav.Link>
    {/* <Nav.Link onclick={()=>setShow(false)} as={Link} to={"/cart"}><i class="fas fa-shopping-cart"/  > Корзина</Nav.Link> */}
</Nav>
  {/* <Form className="d-flex">
    <FormControl
      type="search"
      placeholder="Search"
      className="me-2 search-btn"
      aria-label="Search"
    /> */}
    {/* <Button variant="outline-success">Поиск</Button> */}
  {/* </Form> */}
  {/* <Nav.Link as={Link} className="nav-link"  to="/signin" >вход</Nav.Link> */}
</Navbar.Collapse>
</Container>
</Navbar>
 
</div>
    

   

  )
}

export default Header