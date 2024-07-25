import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, surname, email, password };
    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "errore durante la registrazione");
      }
      const data = await response.json();
      console.log("Registrazione effettuata" + data.userId);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mt-3 inputFormRegister">
          <Form.Control
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputFormRegister"
          />
        </Form.Group>

        <Form.Group controlId="formSurname" className="mt-3 inputFormRegister">
          <Form.Control
            type="text"
            placeholder="Cognome"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="inputFormRegister"
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3 inputFormRegister">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputFormRegister"
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3 inputFormRegister">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputFormRegister"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="mt-3 w-100 btnRegister"
        >
          Crea un account
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
