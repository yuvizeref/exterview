import { Container, Form } from "react-bootstrap";
import type { CompanyType } from "../types/Types";
import CompanyCard from "./CompanyCard";
import { useEffect, useState } from "react";
import { fetchCompanies } from "../utils/CompanyUtils";
import debounce from "lodash/debounce";
import AddCompanyModal from "./AddCompanyModal";
import AddCompanyCard from "./AddCompanyCard";

interface Props {
  onClick: (companyId: number) => void;
}

const CompanyCardGroup = ({ onClick }: Props) => {
  const [companies, setCompanies] = useState<CompanyType[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCompanies, setFilteredcompanies] = useState<CompanyType[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchCompanies(setCompanies, setLoading, setFilteredcompanies);
  }, []);

  useEffect(() => {
    const filtered = companies.filter((company: CompanyType) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sortedFilteredCompanies = filtered.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredcompanies(sortedFilteredCompanies);
  }, [companies, searchQuery]);

  const debouncedSearch = debounce((query: string) => {
    setSearchQuery(query);
  }, 10);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    debouncedSearch(query);
  };

  const handleClick = (companyId: number) => {
    setSelected(companyId);
    onClick(companyId);
  };

  const handlesubmit = (company: CompanyType) => {
    setCompanies((prevCompanies) => {
      const updatedCompanies = [...prevCompanies, company];
      const sortedCompanies = updatedCompanies.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return sortedCompanies;
    });
  };

  const handleDelete = (companyId: number) => {
    setCompanies((prevCompanies) => {
      const updatedCompanies = prevCompanies.filter(
        (company) => company.id !== companyId
      );
      return updatedCompanies;
    });
  };

  const handleAdd = () => setShowModal(true);

  const handleModalClose = () => setShowModal(false);

  const companyInFiltered = filteredCompanies.some(
    (company) => company.id === selected
  );

  useEffect(() => {
    if (!companyInFiltered) onClick(-1);
  }, [companyInFiltered, onClick]);

  if (loading) return <>Loading......</>;

  return (
    <>
      <Container className="company-group-container" fluid>
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="mb-2"
        />
        <Container className="company-card-container" fluid>
          {filteredCompanies.map((company) => (
            <CompanyCard
              company={company}
              selected={company.id === selected}
              onClick={handleClick}
              onDelete={handleDelete}
              key={company.id}
            />
          ))}
        </Container>
        <AddCompanyCard onClick={handleAdd}></AddCompanyCard>
        <AddCompanyModal
          showModal={showModal}
          onClose={handleModalClose}
          onSubmit={handlesubmit}
        />
      </Container>
    </>
  );
};

export default CompanyCardGroup;
