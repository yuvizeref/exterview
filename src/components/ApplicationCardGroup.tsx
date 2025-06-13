import { ListGroup } from "react-bootstrap";
import type { ApplicationType } from "../types/ApplicationTye";
import ApplicationCard from "./ApplicationCard";

interface Props {
  applications: ApplicationType[];
}
const ApplicationCardGroup = ({ applications }: Props) => {
  return (
    <>
      <ListGroup horizontal className={"flex-wrap"}>
        {applications.map((application) => (
          <ListGroup.Item>
            <ApplicationCard application={application}></ApplicationCard>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ApplicationCardGroup;
