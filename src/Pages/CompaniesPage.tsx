import CompanyCardGroup from "../components/CompanyCardGroup";
import type { CompanyType } from "../types/CompanyType";

interface Props {
  companies: CompanyType[];
  onClick: (companyId: number) => void;
}
const CompaniesPage = ({ companies, onClick }: Props) => {
  return (
    <>
      <CompanyCardGroup
        companies={companies}
        onClick={onClick}
      ></CompanyCardGroup>
    </>
  );
};

export default CompaniesPage;
