import { Container } from "react-bootstrap";
import type { ApplicationType } from "../types/Types";
import ApplicationCard from "./ApplicationCard";
import { fetchApplications } from "../utils/ApplicationUtils";
import { useEffect, useState } from "react";
import AddApplicationCard from "./AddApplicationCard";
import AddApplicationModal from "./AddApplcationModal";

interface Props {
  companyId: number;
}

const ApplicationCardGroup = ({ companyId }: Props) => {
  const [applications, setApplications] = useState<ApplicationType[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchApplications(companyId, setApplications, setLoading);
  }, [companyId]);

  const handleDelete = (applicationId: number) => {
    setApplications((prevApplications) => {
      const updatedApplications = prevApplications.filter(
        (application) => application.id !== applicationId
      );
      return updatedApplications;
    });
  };

  const handlesubmit = (application: ApplicationType) => {
    setApplications((prevApplications) => {
      const updatedCompanies = [...prevApplications, application];
      return updatedCompanies;
    });
  };

  const handleAdd = () => setShowModal(true);

  const handleModalClose = () => setShowModal(false);

  if (loading) return <>Loading......</>;

  return (
    <Container className="application-group-container" fluid>
      {companyId > 0 && (
        <AddApplicationCard onClick={handleAdd}></AddApplicationCard>
      )}
      {applications.length > 0 &&
        applications.map((application) => (
          <ApplicationCard
            application={application}
            onDelete={handleDelete}
            key={application.id}
          ></ApplicationCard>
        ))}
      <AddApplicationModal
        showModal={showModal}
        companyId={companyId}
        onClose={handleModalClose}
        onSubmit={handlesubmit}
      ></AddApplicationModal>
    </Container>
  );
};

export default ApplicationCardGroup;
