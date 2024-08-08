import { Container, ListGroup } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container fluid className="fixed-footer p-0 bgFooter">
      <ListGroup className="bgFooter">
        <ListGroup.Item className="d-flex align-items-center justify-content-center bgFooter fw-bold">
          <i className="bi bi-instagram me-1"></i> Epiwine.official
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-center bgFooter fw-bold">
          <i className="bi bi-twitter me-1"></i> Epiwine.offical
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-center bgFooter fw-bold">
          <i className="bi bi-envelope me-1"></i> epiwine@gmail.com
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default MyFooter;
