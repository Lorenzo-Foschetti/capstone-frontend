import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Container fluid className="p-0">
      <Navbar className="wineBg">
        <Container fluid className="p-0">
          <Navbar.Brand href="#home" className="ms-4">
            Epiwine
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="outline-dark">Login</Button>
              <NavLink className="me-4 outline-dark Nav-Link" to="/register">
                Registrati
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};
export default MyNavbar;
