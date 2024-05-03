import React from 'react';
import './Header.css';
import { Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import BlackButton from '../Button/BlackButton';
import { successNotify } from '../../Util/Toast';

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const userFound = JSON.parse(localStorage.getItem('user'))

    const profileHandler = (p) => {
        if (p === 'dashboard') {
            navigate("/admin/dashboard")
        }
        if (p === 'profile') {
            if (userFound?.user?.role === 'artist') navigate('/artist/profile')
            else if (userFound?.user?.role === 'reviewer') navigate('/reviewer/profile')
            else if (userFound?.user?.role === 'admin') navigate('/admin/profile')
        }
        else if (p === 'work') {
            if (userFound?.user?.role === 'artist') navigate('/artist/work')
            else if (userFound?.user?.role === 'reviewer') navigate('/reviewer/work')
        }
        else if (p === 'logout') {
            localStorage.clear();
            navigate('/')
            successNotify("Logout Successfully!")
        }
    }

    const whiteHeader = ["/", "/about", "/services", "/contact", "/faqs", "/privacy-policy", "/terms-use", "/submission-guidelines", "/submission-agreement", "/testimonials", "/copyright"]

    return (
        <>
            {
                whiteHeader.includes(pathname) ?
                    <div className='header_main'>
                        <Container fluid>
                            <img src='/images/main_logo.png' alt='' onClick={() => navigate("/")} className='main_logo' />
                            {
                                userFound ?
                                    <Dropdown className='black'>
                                        <Dropdown.Toggle>
                                            {userFound?.user?.fullName}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => profileHandler(userFound?.user?.role === "admin" ? 'dashboard' : 'profile')}>
                                                {userFound?.user?.role === 'admin' ? 'Dashboard' : 'Profile'}
                                            </Dropdown.Item>
                                            {userFound?.user?.role === 'admin' && <Dropdown.Item onClick={() => profileHandler('profile')}>Profile</Dropdown.Item>}
                                            {userFound?.user?.role !== 'admin' && <Dropdown.Item onClick={() => profileHandler('work')}>Work</Dropdown.Item>}
                                            {userFound?.user?.role === 'reviewer' && <Dropdown.Item onClick={() => navigate('/reviewer/card-details')}>Account Details</Dropdown.Item>}
                                            <Dropdown.Item onClick={() => profileHandler('logout')}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown> :
                                    <BlackButton type="button" onClick={() => navigate('/login')}>
                                        Login
                                        <img src='/images/btn_arrow_img.png' alt='' style={{ width: "30px" }} />
                                    </BlackButton>
                            }
                        </Container>
                    </div> :
                    <div className='header_main' style={{ backgroundColor: "#000" }}>
                        <Container fluid>
                            <img src='/images/white_logo.png' alt='' onClick={() => navigate("/")} className='main_logo' />
                            {
                                userFound ?
                                    <Dropdown className='white'>
                                        <Dropdown.Toggle>
                                            {userFound?.user?.fullName}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => profileHandler(userFound?.user?.role === "admin" ? 'dashboard' : 'profile')}>
                                                {userFound?.user?.role === 'admin' ? 'Dashboard' : 'Profile'}
                                            </Dropdown.Item>
                                            {userFound?.user?.role !== 'admin' && <Dropdown.Item onClick={() => profileHandler('work')}>Work</Dropdown.Item>}
                                            {userFound?.user?.role === 'admin' && <Dropdown.Item onClick={() => profileHandler('profile')}>Profile</Dropdown.Item>}
                                            {userFound?.user?.role === 'reviewer' && <Dropdown.Item onClick={() => navigate('/reviewer/card-details')}>Account Details</Dropdown.Item>}
                                            {/* {userFound?.user?.role === 'reviewer' && <Dropdown.Item onClick={() => navigate('/reviewer/card-details')}>Card Details</Dropdown.Item>} */}
                                            <Dropdown.Item onClick={() => profileHandler('logout')}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown> : null
                            }
                        </Container>
                    </div>
            }
        </>
    )
}

export default Header