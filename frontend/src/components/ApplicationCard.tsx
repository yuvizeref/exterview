import { Card, CardText } from "react-bootstrap";
import type { ApplicationType } from "../types/Types";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteApplication } from "../utils/ApplicationUtils";
import type React from "react";

interface Props {
  application: ApplicationType;
  onDelete: (application: ApplicationType) => void;
  onEdit: (application: ApplicationType) => void;
}

const ApplicationCard = ({ application, onDelete, onEdit }: Props) => {
  const handleDelete = (selectedApplication: ApplicationType) => {
    onDelete(selectedApplication);
    deleteApplication(selectedApplication);
  };

  const handleDeleteClick = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    application.id && handleDelete(application);
  };

  const handleEditClick = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    onEdit(application);
  };

  return (
    <Card className="application-card">
      <Card.Body>
        <Card.Title>{application.role}</Card.Title>
        <CardText>Date Applied : {application.dateApplied}</CardText>
        <CardText>Verdict : {application.verdict}</CardText>
      </Card.Body>
      <FaTrash className="delete-icon" onClick={handleDeleteClick} />
      <FaEdit className="edit-icon" onClick={handleEditClick} />
    </Card>
  );
};

export default ApplicationCard;
