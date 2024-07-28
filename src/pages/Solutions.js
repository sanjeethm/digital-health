import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Solutions.css';

const Solutions = () => {
  return (
    <Container className="solutions-section">
      <h1>Our Solutions</h1>
      <p className="lead">We offer a range of solutions to meet your business needs...</p>
      
      <Row>
        <Col md={6}>
          <Card className="solution-card">
            <Card.Body>
              <Card.Title>Solution 1</Card.Title>
              <Card.Text>Details about Solution 1...</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="/solution1.svg" />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="solution-card">
            <Card.Body>
              <Card.Title>Solution 2</Card.Title>
              <Card.Text>Details about Solution 2...</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="/solution2.svg" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Solutions;
