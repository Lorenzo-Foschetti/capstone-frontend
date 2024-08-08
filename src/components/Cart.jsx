import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeBottleFromCart } from "../redux/actions/removeBottleFromCart";

const Cart = () => {
  const cartBottles = useSelector((state) => state.user.cart_info.bottles);
  const cartId = useSelector((state) => state.user.cart_info.id);
  const isEmpty = cartBottles.length === 0;
  const dispatch = useDispatch();
  const handleDecrement = (gameId) => {
    dispatch(removeBottleFromCart(gameId, cartId));
  };

  // Calcolo del prezzo totale
  const subtotal = cartBottles.reduce((total, bottle) => {
    return total + bottle.price;
  }, 0);

  return (
    <Container className="cartpage-container">
      <Row className="justify-content-between">
        <Col xs={7}>
          <div className="cart-container text-center">
            {isEmpty ? (
              <>
                <h3 className="titleFont mt-4">
                  Non ci sono prodotti nel carrello.
                </h3>
              </>
            ) : (
              cartBottles.map((game, index) => (
                <div key={index}>
                  <Row className="justify-content-between align-items-center">
                    <Col xs={2} className="p-3">
                      <img
                        className="cart-game-img"
                        src={game.urlImage}
                        alt={`game img ${game.name}`}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </Col>
                    <Col xs={6} className="d-flex align-items-center p-3">
                      <h5 className="cart-game-title">{game.name}</h5>
                    </Col>

                    <Col xs={2} className="text-center">
                      <h5>{game.price} €</h5>
                    </Col>
                    <Col xs={2} className="text-center">
                      <Button
                        variant="danger"
                        onClick={() => handleDecrement(game.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                  {index < cartBottles.length - 1 && <hr />}
                </div>
              ))
            )}
          </div>
        </Col>

        <Col xs={4}>
          <h3 className="mb-3 titleFont mt-4">Riepilogo</h3>
          <div className=" text-center">
            <div className=" d-flex justify-content-between">
              <h5>Totale</h5>
              <h5>{subtotal.toFixed(2)}€</h5>
            </div>
            <button
              className={`btn btn-success  mt-4 ${isEmpty ? "disabled" : ""}`}
              disabled={isEmpty}
            >
              Vai al pagamento!
            </button>
            <div className="separator">
              <hr />
            </div>
            <Link className="btn btn-warning fw-bold " to="/">
              <p>Vai alla homepage!</p>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
