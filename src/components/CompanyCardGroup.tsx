import { Button, Container, Form, ListGroup } from "react-bootstrap";
import type { CompanyType } from "../types/CompanyType";
import CompanyCard from "./CompanyCard";
import { useEffect, useState } from "react";
import { fetchCompanies } from "../utils/CompanyUtils";
import { CompGroupContainerStyle } from "../styles/Styles";
import debounce from "lodash/debounce";
import AddCompanyModal from "./AddCompanyModal";

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
      <Container fluid style={CompGroupContainerStyle}>
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="mb-4"
        />
        <Container fluid style={{ overflow: "auto", height: "75vh" }}>
          {filteredCompanies.map((company) => (
            <ListGroup.Item
              style={{ padding: "5px 5px 5px 0" }}
              key={company.id}
            >
              <CompanyCard
                company={company}
                selected={company.id === selected}
                onClick={handleClick}
              />
            </ListGroup.Item>
          ))}
        </Container>
        <Button variant="info" className="w-100" onClick={handleAdd}>
          Add
        </Button>
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
