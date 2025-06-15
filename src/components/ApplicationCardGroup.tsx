import { Container, ListGroup } from "react-bootstrap";
import type { ApplicationType } from "../types/ApplicationTye";
import ApplicationCard from "./ApplicationCard";
import { fetchApplications } from "../utils/ApplicationUtils";
import { useEffect, useState } from "react";
import { ApplGroupContainerStyle } from "../styles/Styles";

interface Props {
  companyId: number;
}

const ApplicationCardGroup = ({ companyId }: Props) => {
  const [applications, setApplications] = useState<ApplicationType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApplications(companyId, setApplications, setLoading);
  }, [companyId]);

  if (loading) return <>Loading......</>;

  return (
    <Container fluid style={ApplGroupContainerStyle}>
      {applications.length == 0 && <>No Applications</>}
      {applications.length > 0 &&
        applications.map((application) => (
          <ListGroup.Item style={{ width: "16rem", height: "25%" }}>
            <ApplicationCard application={application}></ApplicationCard>
          </ListGroup.Item>
        ))}
    </Container>
  );
};

export default ApplicationCardGroup;
