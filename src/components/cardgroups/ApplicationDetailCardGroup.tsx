import { Card } from "react-bootstrap";
import type { ApplicationDetailType } from "../../types/ApplicationDetailType";
import ApplicationDetailCard from "../cards/ApplicationDetailCard";

interface Props {
  applicationDetails: ApplicationDetailType[];
}

const ApplicationDetailCardGroup = ({ applicationDetails }: Props) => {
  return (
    <Card>
      {applicationDetails.map((applicationDetail) => (
        <ApplicationDetailCard
          applicationDetail={applicationDetail}
        ></ApplicationDetailCard>
      ))}
    </Card>
  );
};

export default ApplicationDetailCardGroup;
