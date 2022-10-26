import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center text-danger bg-dark'>
            {
                error && (
                    <div>
                        <h2>{error.statusText || error.message}</h2>
                        <h5>{error.status}</h5>
                    </div>
                )
            }
        </div>
    );
};

export default ErrorPage;