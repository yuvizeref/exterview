import { Container } from "react-bootstrap";
import type { ApplicationType } from "../types/Types";
import ApplicationCard from "./ApplicationCard";
import { fetchApplications } from "../utils/ApplicationUtils";
import { useEffect, useState } from "react";

interface Props {
  companyId: number;
}

const ApplicationCardGroup = ({ companyId }: Props) => {
  const [applications, setApplications] = useState<ApplicationType[]>([]);
  const [loading, setLoading] = useState(false);

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

  if (loading) return <>Loading......</>;

  return (
    <Container className="application-group-container" fluid>
      {applications.length == 0 && <>No Applications</>}
      {applications.length > 0 &&
        applications.map((application) => (
          <ApplicationCard
            application={application}
            onDelete={handleDelete}
          ></ApplicationCard>
        ))}
    </Container>
  );
};

export default ApplicationCardGroup;
