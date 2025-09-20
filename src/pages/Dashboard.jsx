import { useEffect, useState } from "react";
import { Alert, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const userRole = localStorage.getItem("role") || "USER";
    setRole(userRole);

    const endpoint = userRole === "ADMIN" ? "/tickets" : "/tickets/me";

    const fetchTickets = async () => {
      try {
        const res = await fetch(`http://localhost:3001${endpoint}`, {
          headers: { Authorization: "Bearer " + token },
        });
        if (!res.ok) throw new Error("Errore caricamento ticket");
        const data = await res.json();
        setTickets(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="p-4">
      <h1>📊 Dashboard</h1>
      <p>Benvenuto! Sei loggato correttamente 🎉</p>
      <div className="mb-3">
        <Button as={Link} to="/create" variant="success">
          ➕ Crea Ticket
        </Button>
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <h2>Ticket {role === "ADMIN" && "(Tutti i ticket)"}</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Titolo</th>
            <th>Descrizione</th>
            <th>Status</th>
            <th>Priorità</th>
            {role === "ADMIN" && <th>Utente</th>}
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length > 0 ? (
            tickets.map((t) => (
              <tr key={t.id}>
                <td>{t.title}</td>
                <td>{t.description}</td>
                <td>{t.status}</td>
                <td>{t.priority}</td>
                {role === "ADMIN" && <td>{t.user?.username}</td>}
                <td>
                  <Button variant="warning" size="sm" className="me-2" as={Link} to={`/edit/${t.id}`}>
                    Modifica
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={role === "ADMIN" ? 6 : 5}>Nessun ticket trovato</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default Dashboard;
