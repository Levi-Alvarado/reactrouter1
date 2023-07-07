import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function Formulary() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Ingresa una dirección de correo válida.");
      return;
    }

    console.log("Correo:", email);
    console.log("Descripción:", description);

    setEmail("");
    setDescription("");
    setEmailError("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="text-center">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Correo:</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={emailError !== ""}
          />
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Formulary;
