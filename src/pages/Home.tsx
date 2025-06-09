import { useEffect, useState } from "react";
import ApplicationCardGroup from "../components/cardgroups/ApplicationCardGroup";
import type { ApplicationType } from "../types/ApplicationType";
import { Button } from "react-bootstrap";
import ApplicationForm from "../components/forms/ApplicationForm";

const Home = () => {
  const apiURL = "http://localhost:9090/api";
  const [applications, setApplications] = useState<ApplicationType[]>([]);
  const [showAddCardModal, setShowAddCardModal] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = () => {
    fetch(`${apiURL}/applications`)
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  const handleShowAddCardModal = () => setShowAddCardModal(true);
  const handleCloseAddCardModal = () => {
    setShowAddCardModal(false);
  };

  return (
    <>
      <ApplicationCardGroup applications={applications}></ApplicationCardGroup>
      <Button variant="primary" onClick={handleShowAddCardModal}>
        Add New Application
      </Button>
      <ApplicationForm
        show={showAddCardModal}
        handleClose={handleCloseAddCardModal}
        refreshCards={fetchApplications}
      ></ApplicationForm>
    </>
  );
};

export default Home;
