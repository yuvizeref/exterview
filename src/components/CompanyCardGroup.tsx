import { ListGroup } from "react-bootstrap";
import type { CompanyType } from "../types/CompanyType";
import CompanyCard from "./CompanyCard";

interface Props {
  companies: CompanyType[];
  onClick: (companyId: number) => void;
}
const CompanyCardGroup = ({ companies, onClick }: Props) => {
  return (
    <ListGroup horizontal className={"flex-wrap"}>
      {companies.map((company) => (
        <ListGroup.Item>
          <CompanyCard
            company={company}
            key={company.id}
            onClick={onClick}
          ></CompanyCard>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CompanyCardGroup;
