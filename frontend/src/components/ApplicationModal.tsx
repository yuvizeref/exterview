import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import type { ApplicationType } from "../types/Types";
import { addApplication, editApplication } from "../utils/ApplicationUtils";

interface Props {
  showModal: boolean;
  input: ApplicationType;
  action: string;
  onClose: () => void;
  onSubmit: (application: ApplicationType, action: string) => void;
}

const ApplicationModal = ({
  showModal,
  input,
  action,
  onClose,
  onSubmit,
}: Props) => {
  const [application, setApplication] = useState<ApplicationType>(input);

  useEffect(() => {
    setApplication(input);
  }, [input]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ApplicationType
  ) => {
    setApplication((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (action === "add") addApplication(application, onSubmit);
    else editApplication(application, onSubmit);
    onClose();
  };

  return (
    <Modal show={showModal} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {action === "edit" ? "Edit Application" : "Add Application"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              value={application.role}
              onChange={(e) => handleChange(e, "role")}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date Applied</Form.Label>
            <Form.Control
              type="date"
              value={application.dateApplied}
              onChange={(e) => handleChange(e, "dateApplied")}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Verdict</Form.Label>
            <Form.Control
              type="text"
              value={application.verdict}
              onChange={(e) => handleChange(e, "verdict")}
              required
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              {action === "edit" ? "Save Changes" : "Add Application"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ApplicationModal;
