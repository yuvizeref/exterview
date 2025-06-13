import CompaniesPage from "./CompaniesPage";
import { useEffect, useState } from "react";
import type { CompanyType } from "../types/CompanyType";
import fetchCompanies from "../utils/CompanyUtils";
import {
  fetchAllApplications,
  fetchApplications,
} from "../utils/ApplicationUtils";
import type { ApplicationType } from "../types/ApplicationTye";
import ApplicationsPage from "./ApplicationsPage";
import CommonNavigationBar from "../components/CommonNavigationBar";
import CardGroupContainer from "../components/CardGroupContainer";

const Home = () => {
  const [companies, setCompanies] = useState<CompanyType[]>([]);
  const [loading, setLoading] = useState(true);
  const [companySelected, setCompanySelected] = useState(0);
  const [applications, setApplications] = useState<ApplicationType[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page == 1) {
      fetchApplications(companySelected, setApplications, setLoading);
    } else if (page == 2) {
      fetchAllApplications(setApplications, setLoading);
    } else fetchCompanies(setCompanies, setLoading);
  }, [page, companySelected]);

  const handleClick = (companyId: number) => {
    setCompanySelected(companyId);
    setPage(1);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <CommonNavigationBar setPage={setPage}></CommonNavigationBar>
      <CardGroupContainer>
        {page === 0 && (
          <CompaniesPage
            companies={companies}
            onClick={handleClick}
          ></CompaniesPage>
        )}
        {(page == 1 || page == 2) && (
          <ApplicationsPage applications={applications}></ApplicationsPage>
        )}
      </CardGroupContainer>
    </>
  );
};

export default Home;
