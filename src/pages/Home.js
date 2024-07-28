import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Container fluid className="hero-section text-center">
        <div className="overlay">
          <h1 className="display-4">Welcome to Thryve Digital</h1>
          <p className="lead">Empowering your digital transformation</p>
          <Button variant="primary" size="lg" href="/about-us">Learn More</Button>
        </div>
      </Container>
      
      <Container className="services-section">
        <h2>Our Services</h2>
        <Row>
          <Col md={4} className="text-center">
            <Card className="service-card">
              <Card.Body>
                <i className="fas fa-cogs service-icon"></i>
                <Card.Title>Service 1</Card.Title>
                <Card.Text>Placeholder for service 1 description...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card className="service-card">
              <Card.Body>
                <i className="fas fa-chart-line service-icon"></i>
                <Card.Title>Service 2</Card.Title>
                <Card.Text>Placeholder for service 2 description...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card className="service-card">
              <Card.Body>
                <i className="fas fa-shield-alt service-icon"></i>
                <Card.Title>Service 3</Card.Title>
                <Card.Text>Placeholder for service 3 description...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Client 1</Card.Title>
                <Card.Text>"Thryve Digital has transformed our business..."</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Client 2</Card.Title>
                <Card.Text>"The best digital transformation services..."</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Client 3</Card.Title>
                <Card.Text>"Highly recommend Thryve Digital..."</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
