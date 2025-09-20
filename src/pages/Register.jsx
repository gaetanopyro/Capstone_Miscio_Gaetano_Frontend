import { useState } from "react";
import { Alert, Button, Card, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  const doRegister = async (ev) => {
    ev.preventDefault();
    setError(null);

    const fd = new FormData(ev.target);
    const obj = {};
    for (let [k, v] of fd.entries()) obj[k] = v;

    try {
      const res = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      if (!res.ok) throw new Error("Errore registrazione");
      setDone(true);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="form-container">
      <Col md={6} className="form-box">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Registrazione</Card.Title>
            <Form onSubmit={doRegister}>
              {error && <Alert variant="danger">{error}</Alert>}
              {done && (
                <Alert variant="success">
                  Registrazione completata! Vai al <Link to="/login">Login</Link>
                </Alert>
              )}
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Inserisci Username" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Indirizzo Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Inserisci la tua email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRole">
                <Form.Label>Ruolo</Form.Label>
                <Form.Select name="role" defaultValue="USER">
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Registrati
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};
export default Register;
