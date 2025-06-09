import { Form } from "react-bootstrap";

const ApplicationDetailForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formRole">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" placeholder="Enter Role" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRole">
        <Form.Label>Date applied</Form.Label>
        <Form.Control type="datetime-local" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formVerdict">
        <Form.Label>Verdict</Form.Label>
        <Form.Control type="text" placeholder="verdict" />
      </Form.Group>
    </Form>
  );
};

export default ApplicationDetailForm;
