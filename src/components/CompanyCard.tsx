import { Card } from "react-bootstrap";
import type { CompanyType } from "../types/CompanyType";

interface Props {
  company: CompanyType;
  selected: boolean;
  onClick: (companyId: number) => void;
}
const CompanyCard = ({ company, selected, onClick }: Props) => {
  return (
    <Card
      bg={selected ? "info" : ""}
      style={{ borderRadius: "15px", cursor: "pointer" }}
      key={company.id}
    >
      <Card.Body onClick={() => onClick(company.id)}>
        <Card.Title className="text-center">{company.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CompanyCard;
