import logo from './logo.svg';
import styles from './App.css';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Info</h1>
        </Col>
        <Col>
          <h1>Gallery</h1>
        </Col>
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
