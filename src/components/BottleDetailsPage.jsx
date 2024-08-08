import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBottleDetailsAction } from "../redux/actions/getBottleDetailsAction";
import { Spinner, Container, Row, Col, Image, Badge } from "react-bootstrap";

const BottleDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details, loading, error } = useSelector(
    (state) => state.bottleDetails
  );

  useEffect(() => {
    dispatch(getBottleDetailsAction(id));
  }, [dispatch, id]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container className="mt-5">
      {details && (
        <Row className="align-items-center">
          <Col md={6} className="d-flex justify-content-center">
            <Image
              src={details.urlImage}
              alt={details.name}
              fluid
              className="img-fluid rounded detailsImage"
            />
          </Col>
          <Col md={6}>
            <div className="details-container">
              <h1>{details.name}</h1>
              <p className="titleFont">{details.collection}</p>
              <Badge bg="secondary " className="p-2 px-3 rounded-pill mb-2 ">
                {" "}
                {details.price} €{" "}
              </Badge>
              <p className="titleFont">
                {" "}
                <i className="bi bi-calendar-date me-2 fw-bold"></i>Annata:{" "}
                {details.productionYear}
              </p>

              <p className="fw-bold titleFont">NOTE DI DEGUSTAZIONE</p>
              <p className="">{details.description}</p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default BottleDetailsPage;
