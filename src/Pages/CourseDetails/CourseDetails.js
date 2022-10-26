import Button from 'react-bootstrap/Button';
import { FaDownload } from 'react-icons/fa';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import './CourseDetails.css';

const ref = React.createRef();

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { courseName, picture, course_fee, course_duration, details, id } = courseDetails;
    return (
        <div className='course-details-container my-5 mx-auto' ref={ref}>
            <div className='course-image-container'>
                <h3>{courseName}
                    <Pdf targetRef={ref} filename="course-details.pdf">
                        {({ toPdf }) => <FaDownload className='course-icon' onClick={toPdf} />}
                    </Pdf>
                </h3>
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