import React from 'react';
import { Button } from 'react-bootstrap';


const LeftNav = ({ course }) => {
    console.log(course);
    const { courseName } = course;
    return (
        <div>
            <Button className='m-2 text-white w-100 btn-nav' variant="outline-info">{courseName}</Button>
        </div>
    );
};

export default LeftNav;