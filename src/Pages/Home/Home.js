import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Home.css';
import WebDevelopment from '../../assets/homePageImages/web-development.png'
import Mern from '../../assets/homePageImages/mern.png'
import WebDesign from '../../assets/homePageImages/web-design.png'
import Affiliate from '../../assets/homePageImages/affiliate.png'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='mx-5 py-5'>
                <Row xs={1} md={2} className="g-5">
                    <Col>
                        <Card className='bg-warning'>
                            <Card.Img variant="top" src={WebDevelopment} />
                            <Card.Body>
                                <Card.Title><h4>Web Development</h4></Card.Title>
                                <Card.Text>
                                    Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='bg-info'>
                            <Card.Img variant="top" src={Affiliate} />
                            <Card.Body>
                                <Card.Title><h4>Affiliate Marketing</h4></Card.Title>
                                <Card.Text>
                                    Affiliate marketing is a marketing arrangement in which affiliates receive a commission for each visit, sign up or sale they generate for a merchant.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='bg-info'>
                            <Card.Img variant="top" src={WebDesign} />
                            <Card.Body>
                                <Card.Title><h4>Web Designing</h4></Card.Title>
                                <Card.Text>
                                    A web designer is responsible for creating the design and layout of a website or web pages. Web design encompasses many different skills and disciplines in the production and maintenance of websites.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='bg-warning'>
                            <Card.Img variant="top" src={Mern} />
                            <Card.Body>
                                <Card.Title><h4>MERN Stack</h4></Card.Title>
                                <Card.Text>
                                    The MERN architecture allows you to easily construct a three-tier architecture (front end, back end, database) entirely using JavaScript and JSON. Enroll in this course to be a perfect a perfect competitor in the job market.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* {Array.from({ length: 4 }).map((_, idx) => (
                        
                    ))} */}
                </Row>
            </div>
        </div>
    );
};

export default Home;