import { Card } from "react-bootstrap";
import type { CompanyType } from "../types/Types";
import { FaTrash } from "react-icons/fa";
import { deleteCompany } from "../utils/CompanyUtils";

interface Props {
  company: CompanyType;
  selected: boolean;
  onClick: (companyId: number) => void;
  onDelete: (companyId: number) => void;
}

const CompanyCard = ({ company, selected, onClick, onDelete }: Props) => {
  const handleDelete = (companyId: number) => {
    deleteCompany(companyId);
    onDelete(companyId);
  };

  const handleDeleteClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    handleDelete(company.id);
  };

  return (
    <Card className="company-card" bg={selected ? "info" : ""} key={company.id}>
      <Card.Body onClick={() => onClick(company.id)}>
        <Card.Title className="text-center">{company.name}</Card.Title>
      </Card.Body>
      <FaTrash className="delete-icon" onClick={handleDeleteClick}></FaTrash>
    </Card>
  );
};

export default CompanyCard;
