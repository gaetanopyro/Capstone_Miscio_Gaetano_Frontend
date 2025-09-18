import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-info">
        <Container fluid>
          <Navbar.Brand className="fw-bold" href="#">
            RescueDesk
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="fw-semibold" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="fw-semibold" href="#action2">
                Ticket
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="Cerca" placeholder="Inserisci Ticket" className="me-2" aria-label="Cerca" />
              <Button variant="outline-dark">Cerca</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
