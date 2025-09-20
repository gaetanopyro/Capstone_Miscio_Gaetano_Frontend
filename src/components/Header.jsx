import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Navbar variant="dark" expand="xxl" className="mb-3 bg-info">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="ms-4 text-dark fw-semibold fs-2">
          RescueDesk
        </Navbar.Brand>
        <Nav className="me-auto">
          {token && (
            <Nav.Link as={Link} to="/create" className="text-dark fs-5 pt-3">
              Crea Ticket
            </Nav.Link>
          )}
        </Nav>
        <Nav>
          {!token ? (
            <>
              <Nav.Link as={Link} to="/login" className="me-4 text-dark">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="me-4 text-dark">
                Registrati
              </Nav.Link>
            </>
          ) : (
            <Button variant="trasparent" size="sm" onClick={logout} className="me-4 text-dark fs-5">
              Logout
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
