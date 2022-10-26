import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // registration
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUpdateUerProfile(firstName, lastName, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    // for update user profile
    const handleUpdateUerProfile = (firstName, lastName, photoURL) => {
        const profile = {
            displayName: firstName + ' ' + lastName,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e));
    }

    return (
        <div className='mt-5 w-50 mx-auto'>

            <h3 className='text-info'>Registration Form</h3>
            <p><small>Fill up the form to register</small></p>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><strong>First Name</strong></Form.Label>
                    <Form.Control className='text-center' name="firstName" type="text" placeholder="Enter your first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><strong>Last Name</strong></Form.Label>
                    <Form.Control className='text-center' name="lastName" type="text" placeholder="Enter your last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><strong>Photo URL</strong></Form.Label>
                    <Form.Control className='text-center' name="photoURL" type="text" placeholder="Enter your photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><strong>Email address</strong></Form.Label>
                    <Form.Control className='text-center' name="email" type="email" placeholder="Enter your email address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><strong>Password</strong></Form.Label>
                    <Form.Control className='text-center' name="password" type="password" placeholder="Enter your Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className="text-danger">{error}</p>
                <p className='mt-2'>Already have an account? <Link to='/login'>Log in</Link></p>
                {/* <Form.Text className="text-danger">
                
            </Form.Text> */}
            </Form>
        </div>
    );
};

export default Register;