import { Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CreateBottle } from "../redux/actions/CreateBottle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBottleForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bottleCategory: "",
    description: "",
    price: "",
    productionYear: "",
    name: "",
    collection: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CreateBottle(formData));
    navigate("/admin-dashboard");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group className="mb-3 d-flex flex-column align-items-center">
            <Form.Label className="fw-bold">Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il nome della bottiglia"
              required
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3 d-flex flex-column align-items-center">
            <Form.Label className="fw-bold">Categoria</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci la categoria della bottiglia"
              required
              onChange={handleChange}
              name="bottleCategory"
              value={formData.bottleCategory}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3 d-flex flex-column align-items-center">
            <Form.Label className="fw-bold">Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Inserisci una descrizione"
              required
              onChange={handleChange}
              name="description"
              value={formData.description}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3 d-flex flex-column align-items-center">
            <Form.Label className="fw-bold">Prezzo</Form.Label>
            <Form.Control
              type="number"
              placeholder="Inserisci il prezzo"
              required
              onChange={handleChange}
              name="price"
              value={formData.price}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3 d-flex flex-column align-items-center">
            <Form.Label className="fw-bold">Anno di produzione</Form.Label>
            <Form.Control
              type="number"
              placeholder="Inserisci l'anno di produzione"
              required
              onChange={handleChange}
              name="productionYear"
              value={formData.productionYear}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3 d-flex flex-column align-items-center">
            <Form.Label className="fw-bold">Collezione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci la collezione"
              required
              onChange={handleChange}
              name="collection"
              value={formData.collection}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="dark" type="submit">
        Aggiungi bottiglia
      </Button>
    </Form>
  );
};

export default CreateBottleForm;
