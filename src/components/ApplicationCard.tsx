import { Card, CardText } from "react-bootstrap";
import type { ApplicationType } from "../types/ApplicationTye";
import { Pencil } from "react-bootstrap-icons";

interface Props {
  application: ApplicationType;
}
const ApplicationCard = ({ application }: Props) => {
  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Pencil className="position-absolute top-0 end-0 m-2" size={13} />
      <Card.Body>
        <Card.Title>{application.role}</Card.Title>
        <CardText>Date Applied : {application.dateApplied}</CardText>
        <CardText>Verdict : {application.verdict}</CardText>
      </Card.Body>
    </Card>
  );
};

export default ApplicationCard;
