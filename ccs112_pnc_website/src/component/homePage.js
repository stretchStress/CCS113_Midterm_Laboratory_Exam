import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout";
import { Carousel, Card, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <Layout>
        <section className="hero-section text-black text-center py-5">
        <div className="container">
            <h1 className="display-4 fw-bold">Welcome to University ng Cabuyao</h1>
            <p className="lead">Pamantasan ng Cabuyao</p>
        </div>
        </section>

        <section className="container my-5">
        <div className="row justify-content-center">
            <div className="col-md-8">
            <Card className="shadow">
                <Card.Body>
                <Card.Title className="fw-bold">About Pamantasan ng Cabuyao</Card.Title>
                <Card.Text>
                    Pamantasan ng Cabuyao (PNC) is committed to academic excellence, innovation,
                    and being globally-competitive. We provide quality education that shapes future leaders and value-laden professionals.
                </Card.Text>
                <Button variant="info" href="/about">Learn More</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
        </section>

        <section className="container my-5">
            <h2 className="text-center mb-4">Latest News & Announcements</h2>
            <Carousel>
                <Carousel.Item>
                <img className="d-block w-100 img-fluid" src="/images/news1.jpg" alt="News 1" style={{ height: "400px", objectFit: "contain" }}/>
                </Carousel.Item>
                
                <Carousel.Item>
                <img className="d-block w-100 img-fluid" src="/images/news2.jpg" alt="News 2" style={{ height: "400px", objectFit: "contain" }}/>
                </Carousel.Item>

                <Carousel.Item>
                <img className="d-block w-100 img-fluid" src="/images/news3.jpg" alt="News 3" style={{ height: "400px", objectFit: "contain" }}/>
                </Carousel.Item>
            </Carousel>
        </section>

        <section className="text-center py-5 bg-light">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join Pamantasan ng Cabuyao and experience quality education.</p>
            <Button variant="success" href="/admission">Enroll Now</Button>
        </section>


        <style>
        {`
            
        `}
        </style>
    </Layout>
  );
};

export default HomePage;
