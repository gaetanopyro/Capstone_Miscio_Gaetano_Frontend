import { useState } from "react";
import { Alert, Button, Card, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  const doLogin = async (ev) => {
    ev.preventDefault();
    setError(null);

    const fd = new FormData(ev.target);
    const obj = {};
    for (let [k, v] of fd.entries()) obj[k] = v;

    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      if (!res.ok) throw new Error("Credenziali non valide");
      const data = await res.json();
      localStorage.setItem("token", data.accessToken);
      setDone(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-container-login">
      <Col md={6} className="form-box">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Login</Card.Title>
            <Form onSubmit={doLogin}>
              {error && <Alert variant="danger">{error}</Alert>}
              {done && (
                <Alert variant="success">
                  Login effettuato! Vai alla <Link to="/">Home</Link>
                </Alert>
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Indirizzo Email</Form.Label>
                <Form.Control type="email" placeholder="Inserisci la tua email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Login;
