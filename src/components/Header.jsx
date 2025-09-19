import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Navbar.Brand as={Link} to="/">
        RescueDesk
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="me-auto">
          {token && (
            <Nav.Link as={Link} to="/create">
              Crea Ticket
            </Nav.Link>
          )}
        </Nav>
        <Nav>
          {!token ? (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Registrati
              </Nav.Link>
            </>
          ) : (
            <Button variant="outline-light" size="sm" onClick={logout}>
              Logout
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
