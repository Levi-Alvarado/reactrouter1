import {Nav, Navbar, Container} from "react-bootstrap" 
import { Link } from "react-router-dom"
function Navigation() {
  return (
    <Navbar expand="md" bg="danger" data-bs-theme="dark">
      <Container className="NavbarPlacement">
        <Navbar.Brand >
          <Link to="/" className="text-white text-decoration-none">Happy Cake 🍰</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/"className="text-white text-decoration-none me-4">🏠 Inicio</Link>
            <Link to="/contacto"className="text-white text-decoration-none">📙 Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
