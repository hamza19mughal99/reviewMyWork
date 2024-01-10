import React, { useEffect } from 'react';
import './Auth.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import BlackButton from '../../../Component/Button/BlackButton';
import WhiteButton from '../../../Component/Button/WhiteButton';

const Auth = () => {
    const path = useLocation();
    const navigate = useNavigate();
    const loginUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (loginUser) {
            if (loginUser.user.role === 'artist') {
                navigate("/artist/work")
            }
            else if (loginUser.user.role === 'reviewer') {
                navigate("/reviewer/work")
            }
            else if (loginUser.user.role === 'admin') {
                navigate("/admin/dashboard")
            }
        }
    }, [loginUser])

    const signUpHandler = () => {
        if (path.search === "?name=artist") {
            navigate("/artist-register")
        }

        else if (path.search === "?name=reviewer") {
            navigate("/reviewer-register")
        }
    }

    return (
        <div style={{ backgroundColor: "#eff0f0a1" }}>
            <Container fluid>
                <Row className='align-items-center'>
                    <Col md={6} className='p-0'>
                        <div className='signup_left'>
                            {/* <img src='/images/login_left.png' alt='' style={{ height: "87vh", objectFit: "cover" }} /> */}
                        </div>
                    </Col>

                    <Col md={6} className='p-0'>
                        <div className='signup_form'>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
                                <BlackButton style={{ width: "200px", justifyContent: "space-between" }} onClick={signUpHandler}>
                                    Sign up
                                    <img src='/images/btn_arrow_img.png' alt='' />
                                </BlackButton>

                                <WhiteButton style={{ backgroundColor: "#BABCBE", width: "200px", justifyContent: "space-between" }}
                                    onClick={() => navigate("/login")}
                                >
                                    Login
                                    <img src='/images/btn_arrow_img.png' alt='' />
                                </WhiteButton>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Auth