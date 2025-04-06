import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Layout from "./layout";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <Container fluid className="p-0">
        <section 
          className="hero-image d-flex align-items-center justify-content-center" 
          style={{
            background: 'url("/images/pnc-campus.jpg") no-repeat center center',
            backgroundSize: "cover",
            height: "400px",
            position: "relative",
            color: "#fff"
          }}
        >
          <div className="overlay"></div>
          <h1 className="display-2 fw-bold text-shadow">About Pamantasan ng Cabuyao</h1>
        </section>
      </Container>

      <Container className="my-5">
        {/* Legacy & Vision */}
        <Row className="mb-4">
          <Col>
            <h2 className="text-center" style={{ color: "rgb(46, 126, 34)" }}>Our Legacy & Vision</h2>
            <hr style={{ borderTop: "3px solid rgb(46, 126, 34)", width: "10%", margin: "auto" }}/>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <Card className="shadow mb-4">
              <Card.Body>
                <Card.Title className="fw-bold">Vision</Card.Title>
                <Card.Text>
                  An institution of higher learning in Region IV, developing globally-competitive and value-laden professionals and leaders instrumental to community development and nation building.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow mb-4">
              <Card.Body>
                <Card.Title className="fw-bold">Mission</Card.Title>
                <Card.Text>
                  An institution of higher learning committed to equip individuals with knowledge, skills, and values that will enable them to achieve professional goals and provide leadership and service for national development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Core Values & Graduate Attributes */}
        <Row className="mb-5">
          <Col md={6}>
            <Card className="shadow mb-4">
              <Card.Body>
                <Card.Title className="fw-bold">Core Values</Card.Title>
                <Card.Text as="div">
                  <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                    <li>Personal Dignity</li>
                    <li>Nurturing Community</li>
                    <li>Commitment to Excellence</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow mb-4">
              <Card.Body>
                <Card.Title className="fw-bold">Graduate Attributes</Card.Title>
                <Card.Text as="div">
                  <ol style={{ paddingLeft: "1.2rem" }}>
                    <li>Professional competent individual</li>
                    <li>Proficient communicator</li>
                    <li>Analytical &amp; problem solver</li>
                    <li>Lifelong learner</li>
                    <li>Team leader or player</li>
                    <li>Productive individual</li>
                    <li>Socially and ethically responsible citizen</li>
                    <li>Technology-driven professional</li>
                    <li>Value-laden professional</li>
                  </ol>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* History Section with Carousel */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4" style={{ color: "rgb(46, 126, 34)" }}>Our History</h2>
            <Carousel className="mb-4">
              <Carousel.Item>
                <img 
                  className="d-block w-100" 
                  src="/images/history1.jpg" 
                  alt="History 1" 
                  style={{ height: "600px", objectFit: "cover", objectPosition: "center"   }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  className="d-block w-100" 
                  src="/images/history2.jpg" 
                  alt="History 2" 
                  style={{ height: "600px", objectFit: "cover", objectPosition: "center"   }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  className="d-block w-100" 
                  src="/images/history3.jpg" 
                  alt="History 3" 
                  style={{ height: "600px", objectFit: "cover", objectPosition: "center"   }}
                />
              </Carousel.Item>
            </Carousel>
            <Card className="shadow">
              <Card.Body>
                <Card.Text>
                  The Pamantasan ng Cabuyao (PnC), also known as the University of Cabuyao, was founded on April 16, 2003 through Municipal Ordinance 2003-059. Initially established as Cabuyao Community College after the closure of the LSPU-Cabuyao campus, PnC has since evolved into a premier locally-funded university. It was inaugurated on July 31, 2003 and further celebrated with national recognition.
                </Card.Text>
                <Card.Text>
                  Over the years, under dynamic leadership and through various educational reforms, PnC has consistently strived for academic excellence, community service, and innovation, positioning itself as a model institution in the region.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Meet Our Team Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4" style={{ color: "rgb(46, 126, 34)" }}>Meet Our Team</h2>
            <hr style={{ borderTop: "3px solid rgb(46, 126, 34)", width: "10%", margin: "auto" }}/>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col xs={12} md={4}>
            <Card className="shadow-sm text-center">
              <Card.Img 
                variant="top" 
                src="/images/zandra.jpg" 
                style={{ height: "250px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>Dr. Zandra N. Maningas</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Vice President</Card.Subtitle>
                <Card.Text>VP, Planning, Research, and Extension.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="shadow-sm text-center">
              <Card.Img 
                variant="top" 
                src="/images/professor.jpg" 
                style={{ height: "250px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>Dr. Charlemagne Laviña</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">President</Card.Subtitle>
                <Card.Text>Leads the institution with a commitment to academic excellence and innovation.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="shadow-sm text-center">
              <Card.Img 
                variant="top" 
                src="/images/org_chart.png" 
                style={{ height: "250px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>Organization Chart</Card.Title>
                <Card.Text>Discover our management structure.</Card.Text>
                <Button variant="primary" href="#">View More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        {/* Contact & Social Media Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4" style={{ color: "rgb(46, 126, 34)" }}>Contact & Social Media</h2>
            <div className="d-flex justify-content-center">
              <Button variant="outline-primary" className="mx-2" href="https://pnc.edu.ph/" target="_blank">
                <i className="bi bi-globe"></i> Website
              </Button>
              <Button variant="outline-danger" className="mx-2" href="https://www.youtube.com/@UniversityofCabuyao" target="_blank">
                <i className="bi bi-youtube"></i> YouTube
              </Button>
              <Button variant="outline-primary" className="mx-2" href="https://www.facebook.com/ucpncofficial" target="_blank">
                <i className="bi bi-facebook"></i> Facebook
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Custom CSS */}
      <style>
        {`
          .hero-image {
            position: relative;
          }
          .hero-image .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
          }
          .hero-image h1 {
            position: relative;
            z-index: 1;
          }
          .text-shadow {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          }
          @media (max-width: 768px) {
            .display-2 {
              font-size: 2.5rem;
            }
            h2 {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default AboutUs;
