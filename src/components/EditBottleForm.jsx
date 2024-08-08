import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { uploadImage } from "../redux/actions/UploadImage";
import { updateBottleAction } from "../redux/actions/updateBottleAction";
import { getAllWinesAction } from "../redux/actions/getAllWinesAction";

const EditBottleForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    collection: "",
    price: "",
    description: "",
    productionYear: "",
  });

  const bottlesContent = useSelector((state) => state.getAllWines.content);

  useEffect(() => {
    if (!bottlesContent) {
      dispatch(getAllWinesAction());
    } else {
      const bottle = bottlesContent.content.find((bottle) => bottle.id === id);
      if (bottle) {
        setFormData({
          name: bottle.name,
          collection: bottle.collection,
          price: bottle.price,
          description: bottle.description,
          productionYear: bottle.productionYear,
        });
      } else {
        console.error("Bottle not found for ID:", id);
      }
    }
  }, [dispatch, id, bottlesContent]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageSubmit = (event) => {
    event.preventDefault();
    if (file) {
      dispatch(uploadImage(file, id)); // l'ID della bottiglia
    } else {
      console.log("No file selected.");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Updating bottle with data:", formData);
    dispatch(updateBottleAction(id, formData)).then(() => {
      navigate("/adminDashboard");
    });
  };

  return (
    <Container>
      <h2 className="titleFont">Modifica Bottiglia</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Collezione</Form.Label>
          <Form.Control
            type="text"
            name="collection"
            value={formData.collection}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Prezzo</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descrizione</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Anno di Produzione</Form.Label>
          <Form.Control
            type="text"
            name="productionYear"
            value={formData.productionYear}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="warning" type="submit" className="mt-3">
          Aggiorna Bottiglia
        </Button>
      </Form>
      <Form onSubmit={handleImageSubmit} className="mt-4">
        <Form.Group>
          <Form.Label>Carica nuova immagine</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <Button variant="warning" type="submit" className="mt-3">
          Carica Immagine
        </Button>
      </Form>
    </Container>
  );
};

export default EditBottleForm;
