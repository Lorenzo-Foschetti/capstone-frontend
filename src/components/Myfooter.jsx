import { Container, ListGroup } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container fluid className="fixed-footer p-0">
      <ListGroup>
        <ListGroup.Item className="d-flex align-items-center justify-content-center ">
          <i className="bi bi-instagram"></i> Epiwine.official
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-center ">
          <i className="bi bi-twitter"></i> Epiwine.offical
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-center ">
          <i className="bi bi-envelope"></i> epiwine@gmail.com
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};
export default MyFooter;
