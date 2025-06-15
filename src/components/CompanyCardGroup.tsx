import { Container, Form, ListGroup } from "react-bootstrap";
import type { CompanyType } from "../types/CompanyType";
import CompanyCard from "./CompanyCard";
import { useEffect, useState } from "react";
import fetchCompanies from "../utils/CompanyUtils";
import { CompGroupContainerStyle } from "../styles/Styles";
import debounce from "lodash/debounce";

interface Props {
  onClick: (companyId: number) => void;
}
const CompanyCardGroup = ({ onClick }: Props) => {
  const [companies, setCompanies] = useState<CompanyType[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCompanies, setFilteredcompanies] = useState<CompanyType[]>([]);

  useEffect(() => {
    fetchCompanies(setCompanies, setLoading, setFilteredcompanies);
  }, []);

  const debouncedSearch = debounce((query: string) => {
    if (companies && query) {
      const filtered = companies.filter((company: CompanyType) =>
        company.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredcompanies(filtered);
    } else {
      setFilteredcompanies(companies);
    }
  }, 300);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleClick = (companyId: number) => {
    setSelected(companyId);
    onClick(companyId);
  };

  const companyInFiltered = filteredCompanies.some(
    (company) => company.id == selected
  );

  useEffect(() => {
    if (!companyInFiltered) onClick(-1);
  }, [companyInFiltered, onClick]);

  if (loading) return <>Loading......</>;

  return (
    <Container fluid style={CompGroupContainerStyle}>
      <Form.Control
        type="text"
        placeholder="Search companies..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-4"
      />
      {filteredCompanies.map((company) => (
        <ListGroup.Item style={{ padding: "5px" }}>
          <CompanyCard
            company={company}
            selected={company.id == selected}
            key={company.id}
            onClick={handleClick}
          ></CompanyCard>
        </ListGroup.Item>
      ))}
    </Container>
  );
};

export default CompanyCardGroup;
