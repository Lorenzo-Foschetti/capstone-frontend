import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getWinesByCategory } from "../redux/actions/getWinesByCategory";
import { Button, Spinner } from "react-bootstrap";
import { addBottleToCAart } from "../redux/actions/addBottleToCart";

const BottlesPage = () => {
  const isLoggedIn = useSelector((state) => state.user.isLogged);
  const cartId = useSelector((state) => state.user.cart_info?.id);
  const dispatch = useDispatch();
  const { category } = useParams();
  const { content, loading } = useSelector((state) => state.getWinesByCategory);

  const handleAddToCart = (bottleId) => {
    if (isLoggedIn) {
      if (cartId) {
        dispatch(addBottleToCAart(bottleId, cartId)).catch((error) => {
          console.error("Failed to add bottle to cart:", error);
        });
      } else {
        console.error("Cart ID is missing");
      }
    } else {
      Navigate("/login");
    }
  };

  useEffect(() => {
    dispatch(getWinesByCategory(category.toUpperCase()));
  }, [dispatch, category]);

  if (loading) return <Spinner animation="border" />;

  return (
    <div className="container">
      <div className="row justify-content-center">
        {content &&
          content.content.map((bottle) => (
            <div key={bottle.id} className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card text-center cardHeight">
                <img
                  className="card-img-top mx-auto imgStyle p-2"
                  src={bottle.urlImage}
                  alt={bottle.name}
                />
                <div className="card-body">
                  <h5 className="card-title ">{bottle.name}</h5>
                  <p className="card-text fw-bold">{bottle.collection}</p>
                  <p className="card-text fw-bold">{bottle.price} €</p>
                  <Button
                    variant="outline-warning mb-2"
                    onClick={() => handleAddToCart(bottle.id)}
                  >
                    <i className="bi bi-cart-plus"></i>
                  </Button>
                  <Link to={`/bottle/${bottle.id}`}>
                    <Button variant="outline-secondary">
                      Visualizza dettagli
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BottlesPage;
