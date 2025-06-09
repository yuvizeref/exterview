import { Button, Card } from "react-bootstrap";
import type { ApplicationType } from "../../types/ApplicationType";

interface Props {
  application: ApplicationType;
}

const ApplicationCard = ({ application }: Props) => {
  const handleOnClick = () => {
    console.log(application);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{application.company}</Card.Title>
        <Button variant="primary" onClick={handleOnClick}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ApplicationCard;
