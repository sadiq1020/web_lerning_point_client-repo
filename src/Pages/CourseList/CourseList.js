import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CourseList = ({ course }) => {
    const { courseName, course_duration, details, picture, id } = course;
    return (
        <div>
            <CardGroup className='mx-auto'>
                <Card className='mb-3 ms-lg-5'>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{courseName}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/courses/${id}`}><Button className='my-40px' variant="outline-dark">Course Details</Button></Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Course Duration: {course_duration} Months</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default CourseList;