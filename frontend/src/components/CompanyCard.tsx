import { Card } from "react-bootstrap";
import type { CompanyType } from "../types/Types";
import { FaTrash } from "react-icons/fa";
import { deleteCompany, editCompany } from "../utils/CompanyUtils";
import { useEffect, useState } from "react";

interface Props {
  company: CompanyType;
  selected: boolean;
  onClick: (company: CompanyType) => void;
  onDelete: (company: CompanyType) => void;
}

const CompanyCard = ({ company, selected, onClick, onDelete }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(company.name);
  const [initialTitle, setInitialTitle] = useState(company.name);

  const handleDelete = (company: CompanyType) => {
    deleteCompany(company);
    onDelete(company);
  };

  const handleDeleteClick = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    company.id && handleDelete(company);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setEditedTitle(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (editedTitle !== initialTitle) {
      editCompany({ name: editedTitle, id: company.id });
    }
  };

  useEffect(() => {
    setEditedTitle(company.name);
    setInitialTitle(company.name);
  }, [company]);

  return (
    <Card className="company-card" bg={selected ? "info" : ""}>
      <Card.Body onClick={() => company.id && onClick(company)}>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            onBlur={handleBlur}
            autoFocus
            className="text-center form-control"
          />
        ) : (
          <Card.Title
            className="text-center"
            onClick={() => selected && setIsEditing(true)}
          >
            {editedTitle}
          </Card.Title>
        )}
      </Card.Body>
      <FaTrash className="delete-icon" onClick={handleDeleteClick}></FaTrash>
    </Card>
  );
};

export default CompanyCard;
