import { Container, Row, Col } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const BottlesCategories = () => {
  const location = useLocation();
  const hideCategories = location.pathname.includes("/editBottle");
  const hideCategories2 = location.pathname.includes("/createBottleForm");
  const hideCategories3 = location.pathname.includes("/cart");

  if (hideCategories || hideCategories2 || hideCategories3) {
    return null;
  }

  return (
    <Container className="mt-3">
      <Row className="g-2 justify-content-center">
        <Col xs={12} md={4} lg={2} className="mb-2">
          <NavLink
            className="nav-link customLink p-2 text-center"
            to="/vinorosso"
          >
            Vini rossi
          </NavLink>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-2">
          <NavLink
            className="nav-link customLink p-2 text-center"
            to="/vinobianco"
          >
            Vini bianchi
          </NavLink>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-2">
          <NavLink
            className="nav-link customLink p-2 text-center"
            to="/vinonaturale"
          >
            Vini naturali
          </NavLink>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-2">
          <NavLink
            className="nav-link customLink p-2 text-center"
            to="/champagne"
          >
            Champagne
          </NavLink>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-2">
          <NavLink
            className="nav-link customLink p-2 text-center"
            to="/spumante"
          >
            Spumanti
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default BottlesCategories;
