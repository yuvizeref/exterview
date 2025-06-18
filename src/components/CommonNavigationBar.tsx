import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const CommonNavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">ExterView</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CommonNavigationBar;
