import { useState } from "react";
import ApplicationCardGroup from "../components/ApplicationCardGroup";
import CommonNavigationBar from "../components/CommonNavigationBar";
import CompanyCardGroup from "../components/CompanyCardGroup";
import { Container } from "react-bootstrap";
import "../styles/Styles.css";
import type { CompanyType } from "../types/Types";

const dummyCompany = { id: null, name: "" };

const Home = () => {
  const [company, setCompany] = useState<CompanyType>(dummyCompany);

  const handleCompanyClick = (company: CompanyType) => {
    company.id && setCompany(company);
  };

  return (
    <>
      <CommonNavigationBar></CommonNavigationBar>
      <Container fluid className="d-flex">
        <CompanyCardGroup onClick={handleCompanyClick}></CompanyCardGroup>
        <ApplicationCardGroup company={company}></ApplicationCardGroup>
      </Container>
    </>
  );
};

export default Home;
