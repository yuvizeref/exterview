import { Button, Card, Form } from "react-bootstrap";
import type { ApplicationDetailType } from "../../types/ApplicationDetailType";

interface Props {
  applicationDetail: ApplicationDetailType;
}
const ApplicationDetailCard = ({ applicationDetail }: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{applicationDetail.role}</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label>Date applied</Form.Label>
            <Form.Control
              type="datetime-local"
              value={applicationDetail.dateApplied}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formVerdict">
            <Form.Label>Verdict</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter verdict"
              value={applicationDetail.verdict}
            />
          </Form.Group>
        </Form>
        <Button variant="primary">Update</Button>
      </Card.Body>
    </Card>
  );
};

export default ApplicationDetailCard;
