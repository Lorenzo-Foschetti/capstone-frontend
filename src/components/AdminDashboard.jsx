import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getUsersAction } from "../redux/actions/GetUsersAction";
import { getAllWinesAction } from "../redux/actions/getAllWinesAction";
import { deleteBottleAction } from "../redux/actions/deleteBottle";
import { NavLink, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [view, setView] = useState("users");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bottleToDelete, setBottleToDelete] = useState(null);

  const { loading: usersLoading, content: usersContent } = useSelector(
    (state) => state.getUsers
  );
  const { loading: bottlesLoading, content: bottlesContent } = useSelector(
    (state) => state.getAllWines
  );

  const handleFetchUsers = () => {
    setView("users");
    dispatch(getUsersAction());
  };

  const handleFetchBottles = () => {
    setView("bottles");
    dispatch(getAllWinesAction());
  };

  const handleDeleteClick = (id) => {
    setBottleToDelete(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (bottleToDelete) {
      dispatch(deleteBottleAction(bottleToDelete));
      setBottleToDelete(null);
      setShowDeleteModal(false);
    }
  };

  const handleCancelDelete = () => {
    setBottleToDelete(null);
    setShowDeleteModal(false);
  };

  const handleEditClick = (id) => {
    navigate(`/editBottle/${id}`);
  };

  return (
    <Container>
      <Row className="mt-2">
        <Col xs={12} sm={4} className="mb-2 mb-sm-0">
          <Button
            variant="dark"
            className="w-100 custom-button"
            onClick={handleFetchUsers}
          >
            Visualizza utenti
          </Button>
        </Col>
        <Col xs={12} sm={4} className="mb-2 mb-sm-0">
          <Button
            variant="dark"
            className="w-100 custom-button"
            onClick={handleFetchBottles}
          >
            Visualizza bottiglie
          </Button>
        </Col>
        <Col xs={12} sm={4}>
          <NavLink to="/createBottleForm" className="w-100 custom-button">
            Aggiungi bottiglia
          </NavLink>
        </Col>
      </Row>

      {!usersLoading && !bottlesLoading && (
        <div className="mt-4">
          {view === "users" && usersContent && (
            <>
              <Row className="border-bottom pb-2 mb-2">
                <Col>
                  <strong>Nome</strong>
                </Col>
                <Col>
                  <strong>Cognome</strong>
                </Col>
                <Col>
                  <strong>Email</strong>
                </Col>
              </Row>
              {usersContent.content.map((user) => (
                <Row key={user.id} className="border-bottom py-2">
                  <Col>{user.name}</Col>
                  <Col>{user.surname}</Col>
                  <Col>{user.email}</Col>
                </Row>
              ))}
            </>
          )}

          {view === "bottles" && bottlesContent && (
            <>
              <Row className="border-bottom pb-2 mb-2">
                <Col>
                  <strong>Nome</strong>
                </Col>
                <Col>
                  <strong>Collezione</strong>
                </Col>
                <Col>
                  <strong>Prezzo</strong>
                </Col>
                <Col></Col>
              </Row>
              {bottlesContent.content.map((bottle) => (
                <Row key={bottle.id} className="border-bottom py-2">
                  <Col>{bottle.name}</Col>
                  <Col>{bottle.collection}</Col>
                  <Col>{bottle.price} €</Col>
                  <Col className="text-end">
                    <Button
                      variant="warning"
                      className="me-2"
                      onClick={() => handleEditClick(bottle.id)}
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteClick(bottle.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </Col>
                </Row>
              ))}
            </>
          )}
        </div>
      )}

      <Modal show={showDeleteModal} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Conferma eliminazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sei sicuro di voler eliminare questa bottiglia? Questa azione è
          irreversibile.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Annulla
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Conferma
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
