import { useState } from "react";
import ApplicationCardGroup from "../components/ApplicationCardGroup";
import CommonNavigationBar from "../components/CommonNavigationBar";
import CompanyCardGroup from "../components/CompanyCardGroup";
import { Container } from "react-bootstrap";

const Home = () => {
  const [companyId, setCompanyId] = useState(0);

  const handleCompanyClick = (id: number) => {
    setCompanyId(id);
  };

  return (
    <>
      <CommonNavigationBar></CommonNavigationBar>
      <Container fluid style={{ display: "flex" }}>
        <CompanyCardGroup onClick={handleCompanyClick}></CompanyCardGroup>
        <ApplicationCardGroup companyId={companyId}></ApplicationCardGroup>
      </Container>
    </>
  );
};

export default Home;
