import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './Header.css';
import Logo from '../../../assets/headerLogo/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [btnText, setBtnText] = useState('Black');

    // toggle button
    const handleToggleButton = () => {
        if (btnText === 'Black') {
            setBtnText('White')
        }
        if (btnText === 'White') {
            setBtnText('Black')
        }
    }


    // log out
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div>
            <Navbar className='header' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
                    </Navbar.Brand>
                    <Link to='/' className='brandName'><Navbar.Brand><strong>WEB LearningPoint</strong></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/courses' className='header-link'>Courses</Link>
                            <Link className='header-link'>FAQ</Link>
                            <Link className='header-link'>Blog</Link>
                        </Nav>
                        <Button className='me-lg-4' onClick={handleToggleButton} variant="outline-light">{btnText}</Button>
                        <Nav>
                            <>
                                {
                                    user?.uid ?
                                        <Button onClick={handleLogOut} variant="outline-primary">Log out</Button>
                                        :
                                        <Link to='/login'><Button variant="outline-primary">Log in</Button></Link>
                                }
                            </>
                            <>
                                {user?.photoURL ?
                                    <Image style={{ width: '40px' }} roundedCircle src={user.photoURL}></Image>
                                    :
                                    <Link><FaUser></FaUser></Link>
                                }
                            </>
                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </div >
    );
};

export default Header;