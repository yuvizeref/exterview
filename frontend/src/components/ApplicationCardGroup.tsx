import { Container } from "react-bootstrap";
import type { ApplicationType, CompanyType } from "../types/Types";
import ApplicationCard from "./ApplicationCard";
import { fetchApplications } from "../utils/ApplicationUtils";
import { useEffect, useState } from "react";
import AddApplicationCard from "./AddApplicationCard";
import ApplicationModal from "./ApplicationModal";

interface Props {
  company: CompanyType;
}

const ApplicationCardGroup = ({ company }: Props) => {
  const dummy = {
    id: null,
    companyId: company.id,
    role: "",
    dateApplied: "",
    verdict: "",
  };

  const [applications, setApplications] = useState<ApplicationType[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("add");
  const [modalApplication, setModalApplication] =
    useState<ApplicationType>(dummy);

  useEffect(() => {
    fetchApplications(company.id, setApplications, setLoading);
  }, [company]);

  const handleDelete = (selectedApplication: ApplicationType) => {
    setApplications((prevApplications) => {
      const updatedApplications = prevApplications.filter(
        (prevApplication) => prevApplication.id !== selectedApplication.id
      );
      return updatedApplications;
    });
  };

  const handleAdd = () => {
    setAction("add");
    setModalApplication(dummy);
    setShowModal(true);
  };

  const handleEdit = (application: ApplicationType) => {
    setAction("edit");
    setModalApplication(application);
    setShowModal(true);
  };

  const onClose = () => setShowModal(false);

  const onSubmit = (application: ApplicationType, action: string) => {
    if (action === "add") {
      setApplications((prevApplications) => {
        const updatedApplications = [...prevApplications, application];
        return updatedApplications;
      });
    } else if (action === "edit") {
      setApplications((prevApplications) => {
        const updatedApplications = prevApplications.map((app) =>
          app.id === application.id ? { ...app, ...application } : app
        );
        return updatedApplications;
      });
    }
  };

  if (loading) return <>Loading......</>;

  return (
    <Container className="application-group-container" fluid>
      {company.id && company.id > 0 && (
        <AddApplicationCard onClick={handleAdd}></AddApplicationCard>
      )}
      {applications.length > 0 &&
        applications.map((application) => (
          <ApplicationCard
            application={application}
            onDelete={handleDelete}
            key={application.id}
            onEdit={handleEdit}
          ></ApplicationCard>
        ))}
      <ApplicationModal
        showModal={showModal}
        input={modalApplication}
        action={action}
        onClose={onClose}
        onSubmit={onSubmit}
      ></ApplicationModal>
    </Container>
  );
};

export default ApplicationCardGroup;
