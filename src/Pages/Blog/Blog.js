import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container text-white px-5 pb-5'>
            <div className='pt-3'>
                <h1 className='mb-5 mt-5 pt-3 text-center'>Some Common Questions Answer</h1>
            </div>
            <div>
                <h4 className='text-info'>What is 'cors'?</h4>
                <p>CORS is shorthand for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. <br />
                    In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                </p>
            </div>
            <div>
                <h4 className='text-info'>Why are you using 'firebase'? What other options do you have to implement authentication?</h4>
                <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                    <br />
                    Firebase offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services, such as a real-time communication server.
                </p>
                <p><strong>Top Alternatives to Firebase Authentication</strong></p>
                <ul>
                    <li>Kumulos</li>
                    <li>Backendless</li>
                    <li>Deployd</li>
                    <li>Back4App</li>
                    <li>Kuzzle</li>
                </ul>
            </div>
            <div>
                <h3 className='text-info'>How does the private route work?</h3>
                <p>The private route component is used to protect selected pages in a React app from unauthenticated users. It is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </p>
            </div>
            <div>
                <h4 className='text-info'>What is Node? How does Node work?</h4>
                <p>Node (or more formally Node. js) is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript. The runtime is intended for use outside of a browser context (i.e. running directly on a computer or server OS).
                    <br />
                    It is free and runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.) Node.js uses JavaScript on the server.
                    <br /><br />
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                </p>
            </div>
        </div>
    );
};

export default Blog;