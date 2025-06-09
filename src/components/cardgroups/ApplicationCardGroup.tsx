import { CardGroup } from "react-bootstrap";
import ApplicationCard from "../cards/ApplicationCard";
import type { ApplicationType } from "../../types/ApplicationType";

interface Props {
  applications: ApplicationType[];
}

const ApplicationCardGroup = ({ applications }: Props) => {
  return (
    <CardGroup>
      {applications.map((application) => (
        <ApplicationCard
          application={application}
          key={application.id}
        ></ApplicationCard>
      ))}
    </CardGroup>
  );
};

export default ApplicationCardGroup;
