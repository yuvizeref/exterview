import axios from "axios";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  handleClose: () => void;
  refreshCards: () => void;
}

const ApplicationForm = ({ show, handleClose, refreshCards }: Props) => {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const newApplication = {
        company: company,
      };

      console.log(newApplication);
      const response = await axios.post(
        "http://localhost:9090/api/applications",
        newApplication
      );

      if (response.status === 201) {
        refreshCards();
        handleClose();
        setCompany("");
      }
    } catch (error) {
      console.error("Error adding application:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Application</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter company name"
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Card"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ApplicationForm;
