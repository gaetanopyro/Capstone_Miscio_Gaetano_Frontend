import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateTicket = () => {
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  const createTicket = async (ev) => {
    ev.preventDefault();
    setError(null);

    const fd = new FormData(ev.target);
    const obj = {};
    for (let [k, v] of fd.entries()) obj[k] = v;

    try {
      const res = await fetch("http://localhost:3001/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(obj),
      });
      if (!res.ok) throw new Error("Errore creazione ticket");
      setDone(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Form onSubmit={createTicket}>
      {error && <Alert variant="danger">{error}</Alert>}
      {done && (
        <Alert variant="success">
          Ticket creato! Torna alla <Link to="/">Dashboard</Link>
        </Alert>
      )}
      <Form.Group className="mb-3">
        <Form.Label>Titolo</Form.Label>
        <Form.Control name="title" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Descrizione</Form.Label>
        <Form.Control as="textarea" name="description" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Priorità</Form.Label>
        <Form.Select name="priority" defaultValue="LOW">
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select name="status" defaultValue="OPEN">
          <option value="OPEN">OPEN</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="CLOSED">CLOSED</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit">Crea Ticket</Button>
    </Form>
  );
};
export default CreateTicket;
