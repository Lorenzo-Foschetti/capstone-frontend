import { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchUserCartAction,
  fetchUserInfoAction,
  TOGGLE_IS_LOGGED,
} from "../redux/actions/fetchUserAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Errore durante la registrazione");
      }
      const data = await response.json();

      console.log(data);
      console.log("Login effettuato con successo: " + data.accessToken);
      localStorage.setItem("accessToken", data.accessToken);
      const token = localStorage.getItem("accessToken");

      console.log("Dispatching TOGGLE_IS_LOGGED action");
      dispatch({ type: TOGGLE_IS_LOGGED });

      const userInfo = await dispatch(fetchUserInfoAction(token));
      await dispatch(fetchUserCartAction(userInfo.id));

      if (data.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else if (data.role === "NORMALUSER") {
        navigate("/");
      } else {
        throw new Error("Ruolo utente sconosciuto");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Col xs={12} md={4}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mt-3 inputFormRegister">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputFormRegister"
            />
          </Form.Group>

          <Form.Group
            controlId="formPassword"
            className="mt-3 inputFormRegister"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputFormRegister"
            />
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            className="mt-3 w-100 btnRegister"
          >
            Accedi
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default Login;
