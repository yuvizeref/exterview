import { Button, Form, Modal } from "react-bootstrap";
import type { ApplicationType } from "../types/Types";
import { useEffect, useState } from "react";
import { addApplication } from "../utils/ApplicationUtils";

interface Props {
  showModal: boolean;
  companyId: number;
  onClose: () => void;
  onSubmit: (application: ApplicationType) => void;
}

const AddApplicationModal = ({
  showModal,
  companyId,
  onClose,
  onSubmit,
}: Props) => {
  const [show, setShow] = useState(false);
  const [application, setApplication] = useState<ApplicationType>({
    id: null,
    companyId: companyId,
    role: "",
    dateApplied: "",
    verdict: "",
  });

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleAdd = () => {
    application.companyId = companyId;
    console.log(JSON.stringify(application));
    addApplication(application, onSubmit);
    handleClose();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleAdd();
  };

  const roleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedApplication = application;
    updatedApplication.role = event.target.value;
    setApplication(updatedApplication);
  };

  const dateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedApplication = application;
    updatedApplication.dateApplied = event.target.value;
    setApplication(updatedApplication);
  };

  const verdictChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedApplication = application;
    updatedApplication.verdict = event.target.value;
    setApplication(updatedApplication);
  };

  useEffect(() => {
    if (showModal) setShow(true);
    else setShow(false);
  }, [showModal]);

  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>Add Application</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" onChange={roleChange} autoFocus />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date Applied</Form.Label>
            <Form.Control type="date" onChange={dateChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Verdict</Form.Label>
            <Form.Control type="text" onChange={verdictChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
        <Button onClick={handleAdd}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddApplicationModal;
