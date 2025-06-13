import { Button, Card } from "react-bootstrap";
import type { CompanyType } from "../types/CompanyType";
import { Pencil } from "react-bootstrap-icons";

interface Props {
  company: CompanyType;
  onClick: (companyId: number) => void;
}
const CompanyCard = ({ company, onClick }: Props) => {
  return (
    <Card style={{ width: "16.63rem" }} key={company.id}>
      <Button
        variant="outline-info"
        className="position-absolute top-0 end-0 m-2"
      >
        <Pencil />
      </Button>
      <Card.Body>
        <Card.Title>{company.name}</Card.Title>
        <Button variant="primary" onClick={() => onClick(company.id)}>
          Applications
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CompanyCard;
