import { Card } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

interface Props {
  onClick: () => void;
}
const AddApplicationCard = ({ onClick }: Props) => {
  return (
    <Card className="add-application-card" onClick={onClick}>
      <Card.Body>
        <BsPlusCircle size={70} color="#007bff" title="Add Application" />
      </Card.Body>
    </Card>
  );
};

export default AddApplicationCard;
