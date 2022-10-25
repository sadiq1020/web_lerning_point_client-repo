import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { providerGoogleLogin } = useContext(AuthContext);

    // google sign in
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerGoogleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => console.error(e));
    }

    return (
        <div className='mt-5 w-50 mx-auto'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><strong>Email address</strong></Form.Label>
                    <Form.Control className='text-center' type="email" placeholder="Enter your email address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><strong>Password</strong></Form.Label>
                    <Form.Control className='text-center' type="password" placeholder="Enter your Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {/* <Form.Text className="text-danger">
                    
                </Form.Text> */}
            </Form>
            <Button onClick={handleGoogleSignIn} className='my-40px mt-3 me-2' variant="outline-primary">Google sign in</Button>
            <Button className='my-40px mt-3' variant="outline-primary">Git hub sign in</Button>
        </div>
    );
};

export default Login;