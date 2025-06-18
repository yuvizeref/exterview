import { Card, CardText } from "react-bootstrap";
import type { ApplicationType } from "../types/ApplicationTye";

interface Props {
  application: ApplicationType;
}
const ApplicationCard = ({ application }: Props) => {
  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "15px",
        cursor: "pointer",
      }}
    >
      <Card.Body>
        <Card.Title>{application.role}</Card.Title>
        <CardText>Date Applied : {application.dateApplied}</CardText>
        <CardText>Verdict : {application.verdict}</CardText>
      </Card.Body>
    </Card>
  );
};

export default ApplicationCard;
