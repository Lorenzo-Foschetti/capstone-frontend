import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_IS_LOGGED_OUT } from "../redux/actions/fetchUserAction";

const MyNavbar = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch({ type: TOGGLE_IS_LOGGED_OUT });
    navigate("/");
  };

  return (
    <Container fluid className="p-0">
      <Navbar className="wineBg">
        <Container fluid className="p-0">
          <Navbar.Brand href="#home" className="ms-4 text-white">
            Epiwine
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isLogged ? (
                <>
                  <NavLink
                    className="me-4 nav-link text-white btn btn-outline-dark custom-btn"
                    to="/cart"
                  >
                    <i className="bi bi-cart"></i>
                  </NavLink>
                  <Button variant="dark" onClick={handleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <NavLink
                    className="me-4 nav-link text-white btn btn-outline-dark custom-btn"
                    to="/login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className="me-4 nav-link text-white btn btn-outline-dark custom-btn"
                    to="/register"
                  >
                    Registrati
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default MyNavbar;
