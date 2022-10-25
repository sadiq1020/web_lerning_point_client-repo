import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Affiliate from '../../assets/web-development.png'

const CourseList = ({ course }) => {
    const { courseName, course_duration, details, picture } = course;
    return (
        <div>
            <CardGroup className='mx-auto'>
                <Card lg="ms-5" className='mb-3'>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{courseName}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
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