import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, Button, Card } from 'react-bootstrap';

import React, { useState } from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './App.css';

function App() {
  const [confidence, setConfidence] = useState(null);

  const handleUpload = () => {
    const fakeProbability = 0.3; // Simulate 30% fake
    setConfidence(fakeProbability);
  };

  return (
      <>
       <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Deepfake Detection</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#">History</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
      <Container className="mt-5">
      <h2 className="text-center mb-4">Deepfake Detection Dashboard</h2>

      <Card className="p-4 shadow-sm">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label><strong>Upload Media</strong></Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Button onClick={handleUpload} className="w-100 mb-4" variant="primary">
            Analyze
          </Button>
        </Form>

        {confidence !== null && (
          <>
            <h5 className="text-center">Detection Summary</h5>
            <div className="d-flex justify-content-center" style={{ width: 200, margin: 'auto' }}>
              <CircularProgressbar
                value={confidence * 100}
                text={`${(confidence * 100).toFixed(1)}%`}
                styles={buildStyles({
                  textColor: "#000",
                  pathColor: "#ff0000",
                  trailColor: "#00cc00",
                })}
              />
            </div>
            <div className="text-center mt-3">
              <strong>{(confidence * 100).toFixed(1)}% Fake</strong><br />
              <small>{(100 - confidence * 100).toFixed(1)}% Real</small>
            </div>
          </>
        )}
      </Card>
    </Container>
    </>
  );
}

export default App;
