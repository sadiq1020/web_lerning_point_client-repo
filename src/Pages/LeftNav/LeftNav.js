import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const LeftNav = ({ course }) => {
    console.log(course);
    const { courseName, id } = course;
    return (
        <div>
            <Link to={`/courses/${id}`}><Button className='m-2 text-white w-100 btn-nav' variant="outline-info">{courseName}</Button></Link>
        </div>
    );
};

export default LeftNav;