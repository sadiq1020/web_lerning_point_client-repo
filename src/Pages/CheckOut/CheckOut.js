import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './CheckOut.css'

const CheckOut = () => {
    const courseDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const { courseName, course_fee, course_duration } = courseDetails;
    return (
        <div className='mt-5 mx-5'>
            <div className='check-out'>
                <h3 className='text-info'>Check Out</h3>
                <h4>Course Name: <span className='text-success'>{courseName}</span></h4>
                <p>Name: <strong>{user?.displayName}</strong></p>
                <p>Email Address: <strong>{user?.email}</strong></p>
                <h5>Course Fee <span className='text-danger'>${course_fee}</span></h5>
                <h5>Course Duration <span className='text-danger'>{course_duration} Months</span></h5>
            </div>
        </div>
    );
};

export default CheckOut;