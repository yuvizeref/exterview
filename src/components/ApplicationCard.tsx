import { Card, CardText } from "react-bootstrap";
import type { ApplicationType } from "../types/Types";
import { FaTrash } from "react-icons/fa";
import { deleteApplication } from "../utils/ApplicationUtils";

interface Props {
  application: ApplicationType;
  onDelete: (applicationId: number) => void;
}

const ApplicationCard = ({ application, onDelete }: Props) => {
  const handleDelete = (applicationId: number) => {
    onDelete(applicationId);
    deleteApplication(applicationId);
  };

  const handleDeleteClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    application.id && handleDelete(application.id);
  };

  return (
    <Card className="application-card">
      <Card.Body>
        <Card.Title>{application.role}</Card.Title>
        <CardText>Date Applied : {application.dateApplied}</CardText>
        <CardText>Verdict : {application.verdict}</CardText>
      </Card.Body>
      <FaTrash className="delete-icon" onClick={handleDeleteClick}></FaTrash>
    </Card>
  );
};

export default ApplicationCard;
