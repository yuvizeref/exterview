import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import type { CompanyType } from "../types/Types";
import { addCompany } from "../utils/CompanyUtils";

interface Props {
  showModal: boolean;
  onClose: () => void;
  onSubmit: (company: CompanyType) => void;
}

const AddCompanyModal = ({ showModal, onClose, onSubmit }: Props) => {
  const [show, setShow] = useState(false);
  const [company, setCompany] = useState<CompanyType>({ name: "", id: null });

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleAdd = () => {
    addCompany(company, onSubmit);
    handleClose();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleAdd();
  };

  const textOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCompany({ name: event.target.value, id: null });

  useEffect(() => {
    if (showModal) setShow(true);
    else setShow(false);
  }, [showModal]);

  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>Add Company</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              onChange={textOnChange}
              autoFocus
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close
          </Button>
          <Button type="submit">Add</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddCompanyModal;
