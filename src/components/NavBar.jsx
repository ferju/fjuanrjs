import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link } from 'react-router-dom'


function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>Mi carrito</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/category/shampoo'>Shampoo</Nav.Link>
          <Nav.Link as={Link} to='/category/acondicionador'>Acondicionador</Nav.Link>
          <Nav.Link as={Link} to='/category/peinado'>Peinado</Nav.Link>
        </Nav>
      <CartWidget />
    </Container>
    </Navbar >
  );
}

export default NavBar;