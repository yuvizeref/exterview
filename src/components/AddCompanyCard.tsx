import { Card } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

interface Props {
  onClick: () => void;
}
const AddCompanyCard = ({ onClick }: Props) => {
  return (
    <Card className="add-company-card" onClick={onClick}>
      <Card.Body>
        <BsPlusCircle size={35} color="#007bff" title="Add Company" />
      </Card.Body>
    </Card>
  );
};

export default AddCompanyCard;
