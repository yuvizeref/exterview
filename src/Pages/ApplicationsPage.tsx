import ApplicationCardGroup from "../components/ApplicationCardGroup";
import type { ApplicationType } from "../types/ApplicationTye";

interface Props {
  applications: ApplicationType[];
}
const ApplicationsPage = ({ applications }: Props) => {
  return (
    <>
      <ApplicationCardGroup applications={applications}></ApplicationCardGroup>
    </>
  );
};

export default ApplicationsPage;
