import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { providerGoogleLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    // google sign in
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerGoogleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    // sign in with email and password
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/');
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }



    return (
        <div className='mt-5 w-50 mx-auto'>
            <Form onSubmit={handleSignIn}>
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
                {/* <Form.Text className="text-danger">
                    {error}
                </Form.Text> */}
            </Form>
            <Button onClick={handleGoogleSignIn} className='my-40px mt-3 me-2' variant="outline-primary">Google sign in</Button>
            <Button className='my-40px mt-3' variant="outline-primary">Git hub sign in</Button>
            <p className="text-danger">{error}</p>
        </div>
    );
};

export default Login;