import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Courses.css';
import LeftNav from '../LeftNav/LeftNav';
import { useLoaderData } from 'react-router-dom';
import CourseList from '../CourseList/CourseList';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='course-container'>
            <Container className='p-5'>
                <Row>
                    <Col lg="2">
                        {
                            courses.map(course => <LeftNav key={course.key} course={course}></LeftNav>)
                        }
                    </Col>
                    <Col lg="10">
                        {
                            courses.map(course => <CourseList key={course.key} course={course}></CourseList>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;