import { Button, Card, CardText } from "react-bootstrap";
import type { ApplicationType } from "../types/ApplicationTye";
import { Pencil } from "react-bootstrap-icons";

interface Props {
  application: ApplicationType;
}
const ApplicationCard = ({ application }: Props) => {
  return (
    <Card style={{ width: "16.6rem" }}>
      <Button
        variant="outline-info"
        className="position-absolute top-0 end-0 m-2"
      >
        <Pencil />
      </Button>
      <Card.Body>
        <Card.Title>{application.role}</Card.Title>
        <CardText>Date Applied : {application.dateApplied}</CardText>
        <CardText>Verdict : {application.verdict}</CardText>
        <CardText>Company ID : {application.companyId}</CardText>
      </Card.Body>
    </Card>
  );
};

export default ApplicationCard;
