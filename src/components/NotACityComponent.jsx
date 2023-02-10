import { Container, Row, Col } from "react-bootstrap";

const NotACityComponent = () => {
  return (
    <Container className="m-5 error-container ml-auto">
      <Row>
        <Col sm={12}>
          <h1 className="mb-4">Error:</h1>
        </Col>
      </Row>
      <Row className="p-2">
        The princess is in another castle, yare yare daze...
      </Row>
    </Container>
  );
};

export default NotACityComponent;
