import Button from 'react-bootstrap/Button';
import { FaFileDownload } from 'react-icons/fa';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
    // const [] = 
    const courseDetails = useLoaderData();
    const { courseName, picture, course_fee, course_duration, details, id } = courseDetails;
    return (
        <div className='course-details-container'>
            <div className='course-image-container'>
                <h3>{courseName} <button><FaFileDownload /></button></h3>
                <img src={picture} alt="" />
            </div>

            <p>{details}</p>
            <div className='d-flex justify-content-around'>
                <h5>Course fee<span className='text-primary'> ${course_fee}</span></h5>
                <h5>Course Duration: <span className='text-success'>{course_duration} months</span></h5>
            </div>
            <Link to={`/checkout/${id}`} ><Button className='my-40px' variant="outline-dark">Get Premium Access</Button></Link>

        </div>
    );
};

export default CourseDetails;