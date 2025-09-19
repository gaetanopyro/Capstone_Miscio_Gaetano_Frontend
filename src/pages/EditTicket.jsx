import { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const res = await fetch(`http://localhost:3001/tickets/${id}`, {
          headers: { Authorization: "Bearer " + token },
        });
        if (!res.ok) throw new Error("Errore caricamento ticket");
        const data = await res.json();
        setTicket(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchTicket();
  }, [id]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setError(null);

    try {
      const res = await fetch(`http://localhost:3001/tickets/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          description: ticket.description,
          status: ticket.status,
          priority: ticket.priority,
        }),
      });
      if (!res.ok) throw new Error("Errore durante l'aggiornamento");
      navigate("/dashboard"); // torna alla dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  if (!ticket) return <p>Caricamento ticket...</p>;

  return (
    <div className="p-4">
      <h1>Modifica Ticket</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Titolo</Form.Label>
          <Form.Control type="text" value={ticket.title} disabled />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrizione</Form.Label>
          <Form.Control as="textarea" value={ticket.description} onChange={(e) => setTicket({ ...ticket, description: e.target.value })} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select value={ticket.status} onChange={(e) => setTicket({ ...ticket, status: e.target.value })}>
            <option value="OPEN">OPEN</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="CLOSED">CLOSED</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Priorità</Form.Label>
          <Form.Select value={ticket.priority} onChange={(e) => setTicket({ ...ticket, priority: e.target.value })}>
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="me-2">
          Aggiorna Ticket
        </Button>
        <Button variant="secondary" as={Link} to="/dashboard">
          Annulla
        </Button>
      </Form>
    </div>
  );
};

export default EditTicket;
