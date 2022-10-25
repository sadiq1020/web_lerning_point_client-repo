import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Course.css';
import LeftNav from './LeftNav/LeftNav';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);

    return (
        <div className='course-container'>
            <Container>
                <Row>
                    <Col lg="3">
                        {
                            courses.map(course => <LeftNav key={course.key} course={course}></LeftNav>)
                        }
                    </Col>
                    <Col lg="9">
                        asdasdasd
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;