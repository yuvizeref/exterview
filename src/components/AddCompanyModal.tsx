import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import type { CompanyType } from "../types/CompanyType";
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
    if (company.name == "") return;
    addCompany(company, onSubmit);
    handleClose();
  };

  useEffect(() => {
    if (showModal) setShow(true);
    else setShow(false);
  }, [showModal]);

  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>Add Company</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCompany({ name: e.target.value, id: null })}
              autoFocus
            />
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

export default AddCompanyModal;
