import { Card } from "react-bootstrap";
import type { CompanyType } from "../types/CompanyType";
import { Pencil } from "react-bootstrap-icons";

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
        <Card.Title>
          {company.name}{" "}
          <Pencil className="position-absolute end-0 m-2" size={13} />
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CompanyCard;
