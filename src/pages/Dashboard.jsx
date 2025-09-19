import { useEffect, useState } from "react";
import { Alert, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch("http://localhost:3001/tickets/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
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
      <h2>I tuoi ticket</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button as={Link} to="/create" className="mb-3">
        + Crea Ticket
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Titolo</th>
            <th>Descrizione</th>
            <th>Status</th>
            <th>Priorità</th>
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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nessun ticket trovato</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default Dashboard;
