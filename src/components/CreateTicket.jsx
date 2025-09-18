import { Button, Form } from "react-bootstrap";

const CreateTicket = () => {
  return (
    <Form>
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
