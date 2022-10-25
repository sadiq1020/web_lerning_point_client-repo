import Button from 'react-bootstrap/Button';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { courseName, picture, course_fee, course_duration, details } = courseDetails;
    return (
        <div className='course-details-container'>
            <div className='course-image-container'>
                <img src={picture} alt="" />
                <h3>{courseName}</h3>
            </div>

            <p>{details}</p>
            <div className='d-flex justify-content-around'>
                <h5>Course fee<span className='text-primary'> ${course_fee}</span></h5>
                <h5>Course Duration: <span className='text-success'>{course_duration} months</span></h5>
            </div>
            <Button className='my-40px' variant="outline-dark">Premium Access</Button>

        </div>
    );
};

export default CourseDetails;