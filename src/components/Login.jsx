const Login = () => {
  return (
    <div className="form-container-login">
      <Col md={6} className="form-box">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Login</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Indirizzo Email</Form.Label>
                <Form.Control type="email" placeholder="Inserisci la tua email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Invia
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};
export default Login;
